import cn from "classnames"
import Link from "next/link"
import s from "./HeaderLink.module.scss"

export const HeaderLink = ({ children, link, className, ...props }) => {
  return (
    <Link href={link}>
      <a className={cn(s.link, className)} {...props}>
        {children}
      </a>
    </Link>
  )
}
