import Image from "next/image"
import s from "./IndexExpert.module.scss"

export const IndexExpert = ({ data }) => {
  return (
    <div className={s.card}>
      <div className={s.img}>
        <Image src={data.photo} layout="responsive" alt={data.name} />
      </div>
      <p>{data.text}</p>
      <div className={s.bottom}>
        <p className={s.name}>{data.name}</p>
        <p className={s.position}>{data.position}</p>
      </div>
    </div>
  )
}
