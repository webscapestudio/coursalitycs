import cn from "classnames";
import s from "./Textarea.module.scss";

export const Textarea = ({ placeholder, className, value, ...props }) => {
  return (
    <textarea className={cn(s.textarea, className)} placeholder={placeholder}>
      {value}
    </textarea>
  );
};
