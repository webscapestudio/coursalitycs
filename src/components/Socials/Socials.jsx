import s from "./Socials.module.scss"

import Link from "next/link"

import FbIcon from "./Facebook.svg"
import TgIcon from "./Telegram.svg"
import TwIcon from "./Twitter.svg"

export const Socials = () => {
  return (
    <div className={s.wrap}>
      <Link href="https://instagram.com/coursalytics">
        <a target="_blank">
          <TwIcon />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/company/coursalytics">
        <a target="_blank">
          <TgIcon />
        </a>
      </Link>
      <Link href="https://facebook.com/coursalytics/">
        <a target="_blank">
          <FbIcon />
        </a>
      </Link>
    </div>
  )
}
