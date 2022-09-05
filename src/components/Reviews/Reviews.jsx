import { Review } from "../../ui"
import s from "./Reviews.module.scss"

export const Reviews = ({ data }) => {
  return (
    <div className={s.wrap}>
      {data.map((item) => (
        <Review key={item.id} data={item} />
      ))}
    </div>
  )
}
