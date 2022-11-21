import Image from "next/image";
import s from "./ExpertsFour.module.scss";

export const ExpertSlide = ({ data }) => {
  return (
    <div className={s.item}>
      <div className={s.image}>
        <Image src={data.photo} width="100%" height="100%" alt={data.name} />
      </div>
      <h4 className={s.card__title}>{data.name}</h4>
      <p className={s.text}>{data.description}</p>
    </div>
  );
};
