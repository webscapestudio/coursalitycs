import cn from "classnames";
import { Button } from "../../ui";
import s from "./ProgramsSection.module.scss";

export const ProgramItem = ({
  toptext,
  price,
  list,
  description,
  subprice,
  active,
  isModalOpen,
  setIsModalOpen,
}) => {
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div
      className={cn(s.item, {
        [s.active]: active,
      })}
    >
      <h4 className={s.toptext}>{toptext}</h4>

      <div className={s.pricewrap}>
        <p className={s.price}>{price}</p>
        {subprice && <p className={s.subprice}>{subprice}</p>}
      </div>

      <ul className={s.list}>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className={s.subtext}>{description}</p>

      <Button style="accent" onClick={openModal} className={s.btn}>
        Apply now
      </Button>
    </div>
  );
};
