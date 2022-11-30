import cn from "classnames";
import s from "./Input.module.scss";

export const Input = ({
  type = "text",
  placeholder,
  className,
  form,
  errorText,
  ...props
}) => {
  return (
    <div className={cn(s.wrap, className)}>
      <div
        className={cn(s.input, {
          [s.err]: errorText,
        })}
      >
        <input type="text" placeholder={placeholder} {...form} {...props} />
      </div>
      {errorText && <div className={s.errorText}>{errorText}</div>}
    </div>
  );
};
