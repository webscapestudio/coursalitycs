import s from "./IndexCard.module.scss"
import HomeIcon from "./home.svg"
import PinIcon from "./pin.svg"

export const IndexCard = ({ item }) => {
  return (
    <div className={s.card}>
      <h3>{item.title}</h3>
      <div className={s.row}>
        <HomeIcon />
        <p className={s.address}>{item.address}</p>
      </div>
      <div className={s.row}>
        <PinIcon />
        <p className={s.location}>{item.map}</p>
      </div>
      <p className={s.date}>{item.date}</p>
    </div>
  )
}
