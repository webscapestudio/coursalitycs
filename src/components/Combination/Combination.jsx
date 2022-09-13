import { Title } from "../../ui"
import s from "./Combination.module.scss"
import CombSvg from "./combinations.svg"

export const Combination = () => {
  return (
    <section className={s.wrap}>
      <div className="container">
        <div className={s.inner}>
          <Title tag="h2">
            We offer <span>different combinations</span> <br /> of formats and
            durations
          </Title>

          <div className={s.motion}>
            <CombSvg />
          </div>
        </div>
      </div>
    </section>
  )
}
