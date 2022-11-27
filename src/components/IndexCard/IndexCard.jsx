import s from "./IndexCard.module.scss"
import HomeIcon from "./home.svg"
import PinIcon from "./pin.svg"
import Link from "next/link";

export const IndexCard = ({ item }) => {
  return (
    <Link href={`https://coursalytics.com/courses/${item.slug}`}>
    <div className={s.card}>
      <h3>{item.name}</h3>
      <div className={s.row}>
        <HomeIcon />
        <p className={s.address}>{item.division.title}</p>
      </div>
      <div className={s.row}>
        <PinIcon />
        <p className={s.location}>{item.occasion.location}</p>
      </div>
      <p className={s.date}>{item.occasion.start_at}</p>
    </div>
    </Link>
  )
}
