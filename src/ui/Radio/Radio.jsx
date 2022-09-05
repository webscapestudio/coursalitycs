import cn from "classnames"
import s from "./Radio.module.scss"

export const Radio = ({ label, className, value, checked, name, ...props }) => {
  return (
    <label className={cn(s.radio, className)}>
      <input
        type="radio"
        value="value"
        className={cn(s.input)}
        checked={checked}
        name={name}
      />
      <span className={s.check}></span>
      <p>{label && label}</p>
    </label>
  )
}
