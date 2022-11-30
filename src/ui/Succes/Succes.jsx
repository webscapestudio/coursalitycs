import s from "./Succes.module.scss";
import CheckIcon from "./Check.svg";
import cn from "classnames";

export const Succes = ({ className }) => {
  return (
    <div className={cn(s.item, className)}>
      <CheckIcon />
      <p>Succes</p>
    </div>
  );
};
