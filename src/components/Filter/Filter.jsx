import cn from "classnames"
import s from "./Filter.module.scss"

export const Filter = ({ className, ...props }) => {
  return <aside className={cn(s.filter, className)}>Filter</aside>
}
