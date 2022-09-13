import Image from "next/image"
import Link from "next/link"
import s from "./TopicItem.module.scss"

export const TopicItem = ({ data }) => {
  return (
    <Link href={data.link}>
      <a className={s.card}>
        <div className={s.icon}>{data.img}</div>
        <div className={s.info}>
          <h3 className={s.title}>{data.title}</h3>
          <p className={s.text}>{data.text}</p>
        </div>
      </a>
    </Link>
  )
}
