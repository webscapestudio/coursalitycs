import cn from "classnames";
import Link from "next/link";
import s from "./HeaderLink.module.scss";

export const HeaderLink = ({ children, link, className, sub, ...props }) => {
  return (
    <>
      <Link href={link}>
        <a className={cn(s.link, className)} {...props}>
          {children}
        </a>
      </Link>

      {sub && <div className={s.drop}>lkj</div>}
    </>
  );
};
