import cn from "classnames"
import { useEffect, useState } from "react"
import s from "./ProgressBar.module.scss"

export const ProgressBar = ({ className, range, ...props }) => {
  const [width, setWidth] = useState(0)
  const [parts, setParts] = useState(range)

  useEffect(() => {
    const perc = 100 / parts
    setWidth(perc)
  }, [])

  return (
    <div className={cn(s.bar, className)} {...props}>
      <div className={s.line}>
        <div style={{ width: `${width}%` }} className={s.prog}></div>
      </div>
    </div>
  )
}
