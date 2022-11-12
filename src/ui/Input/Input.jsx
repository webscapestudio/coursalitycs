import cn from "classnames";
import s from "./Input.module.scss";

export const Input = ({
  type = "text",
  placeholder,
  className,
  form,
  error,
}) => {
  return (
    <div className={cn(s.input, className)}>
      <input type="text" placeholder={placeholder} {...form} />
      {error && <p>{errors.firstName?.message}</p>}
    </div>
  );
};
