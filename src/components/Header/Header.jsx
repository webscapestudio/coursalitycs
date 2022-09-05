import cn from "classnames"
import s from "./Header.module.scss"
import Link from "next/link"
import LogoIcon from "./logo.svg"
import { HeaderLink, Input } from "../../ui"

export const Header = () => {
  const links = [
    { id: 1, title: "Services", link: "/services" },
    { id: 2, title: "Topics", link: "/topics" },
    { id: 3, title: "Courses", link: "/courses" },
    { id: 4, title: "Experts", link: "/experts" },
    { id: 5, title: "About us", link: "/about" },
  ]
  return (
    <header className={cn(s.header)}>
      <div className="container">
        <div className={s.wrap}>
          <Link href="/">
            <a className={s.logo}>
              <LogoIcon />
            </a>
          </Link>

          <nav className={s.nav}>
            {links.map((item) => (
              <HeaderLink key={item.id} link={item.link}>
                {item.title}
              </HeaderLink>
            ))}
          </nav>
          <div className={s.right}>
            <Input placeholder="Enter keywords" />
          </div>
        </div>
      </div>
    </header>
  )
}
