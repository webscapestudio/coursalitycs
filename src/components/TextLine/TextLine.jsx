import cn from "classnames"
import s from "./TextLine.module.scss"
import Text from "./text.svg"

export const TextLine = ({ className }) => {
  return (
    <div className={cn(s.text, className)}>
      <Text />
    </div>
  )
}
