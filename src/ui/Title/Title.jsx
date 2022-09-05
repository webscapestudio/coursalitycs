import cn from "classnames"
import s from "./Title.module.scss"

export const Title = ({ tag, children, className, ...props }) => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(s.h1, className)} {...props}>
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2 className={cn(s.h2, className)} {...props}>
          {children}
        </h2>
      )

    case "h3":
      return (
        <h3 className={cn(s.h3, className)} {...props}>
          {children}
        </h3>
      )

    default:
      break
  }
}
