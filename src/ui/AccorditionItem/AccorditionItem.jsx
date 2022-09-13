import { useState } from "react"
import s from "./AccorditionItem.module.scss"
import Chevron from "./chevron.svg"
export const AccorditionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={s.item}>
      <div className={s.top}>
        <div className={s.title}>{title}</div>
        <Chevron className={s.icon} />
      </div>
    </div>
  )
}
