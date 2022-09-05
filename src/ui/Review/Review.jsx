import Image from "next/image"
import s from "./Review.module.scss"

export const Review = ({ data }) => {
  console.log(data)
  return (
    <div className={s.card}>
      <Image src={data.img} layout="responsive" alt={data.name} />
      <div className={s.info}>
        <p className={s.name}>{data.name}</p>
        <p className={s.title}>{data.title}</p>
        <p className={s.text}>{data.text}</p>
      </div>
      <div className="overflow"></div>
    </div>
  )
}
