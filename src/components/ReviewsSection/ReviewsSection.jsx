import s from "./ReviewsSection.module.scss"
import { Title } from "../../ui"
import { Reviews } from "../Reviews/Reviews"

export const ReviewsSection = ({ data }) => {
  return (
    <section className={s.section}>
      <div className="container-xl">
        <Title tag="h2" className={s.title}>
          What prior courses <br /> participants <span>have to say</span>
        </Title>

        <Reviews data={data} />
      </div>
    </section>
  )
}
