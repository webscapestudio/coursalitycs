import cn from "classnames"
import s from "./Input.module.scss"

export const Input = ({ type = "text", placeholder, className, ...props }) => {
  return (
    <div className={cn(s.input, className)}>
      <input type="text" placeholder={placeholder} />
    </div>
  )
}
