import cn from "classnames";
import Link from "next/link";
import useOutsideClick from "../../hooks/useOutsideClick";
import s from "./HeaderLink.module.scss";
import Chevron from "./chevron.svg";
import { Button } from "../Button/Button";

export const HeaderLink = ({
  children,
  link,
  className,
  sub,
  subTopics,
  ...props
}) => {
  let { ref, isOpen, setIsOpen } = useOutsideClick(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Link href={link}>
        <a
          className={cn(s.link, className, {
            [s.active]: isOpen,
            [s.link__sub]: sub || subTopics,
          })}
          {...props}
          onClick={() => {
            if (isOpen) {
              openMenu(false);
            } else {
              openMenu(true);
            }
          }}
        >
          {children}
          {sub && <Chevron className={s.icon} />}
          {subTopics && <Chevron className={s.icon} />}
        </a>
      </Link>

      {sub && (
        <div
          ref={ref}
          className={cn(s.drop, {
            [s.active]: isOpen,
          })}
        >
          <div className="container-xl">
            <div className={s.drop__wrap}>
              {sub.map((item, idx) => (
                <Link key={idx} href={item.link}>
                  <div className={cn(s.drop__item, s.gray)}>
                    {item.icon}
                    <div className={s.drop__item_info}>
                      <h4>{item.title}</h4>
                      {/* {item.link && (
                        <p className={s.drop__item_link}>Learn more</p>
                      )} */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {subTopics && (
        <div
          ref={ref}
          className={cn(s.drop, {
            [s.active]: isOpen,
          })}
        >
          <div className="container-xl">
            <div className={s.drop__wrap}>
              {subTopics.map((item, idx) => (
                <Link href={item.link} key={idx}>
                  <a className={cn(s.drop__item)}>
                    {item.icon}
                    <div className={s.drop__item_info}>
                      <h4>{item.title}</h4>
                      {/* {item.link && (
                        <p className={s.drop__item_link}>Over 150 topics</p>
                      )} */}
                    </div>
                  </a>
                </Link>
              ))}

              <Link href="javascript:void(0)">
                <a className={cn(s.drop__item, s.center)}>
                  <div className={cn(s.drop__item_info)}>
                    <Button
                      link="https://coursalytics.com/topics"
                      style="accent"
                    >
                      See all topics
                    </Button>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
