import s from "./Quiz.module.scss"
import Billy from "./billy.png"
import Image from "next/image"
import { ProgressBar, Radio, Title } from "../../ui"
import { useState } from "react"

export const Quiz = () => {
  const [slide, setSlide] = useState(1)
  return (
    <section id="quiz" className={s.quiz}>
      <div className="container">
        <div className={s.slide}>
          <div className={s.left}>
            <Title tag="h2">
              <span>Your personal </span> profile
            </Title>
            <p className={s.subtitle}>
              Fill out a few steps of the questionnaire so that we get to know
              you
            </p>
            <div className={s.item}>
              <div className={s.item_slide}>
                <p className={s.title}>Do you have experience in business</p>
                <div className={s.radios}>
                  <Radio name="exp" className={s.radio} label="Yes" />
                  <Radio name="exp" className={s.radio} label="No" />
                </div>
              </div>
            </div>

            <ProgressBar className={s.bar} range={5} />
          </div>

          <div className={s.right}>
            <Image src={Billy} alt="a" layout="responsive" />
          </div>
        </div>
      </div>
    </section>
  )
}
