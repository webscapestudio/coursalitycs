import { Title } from "../../ui"
import s from "./PriceDepend.module.scss"
import Billy from "./billy.png"
import Image from "next/image"
import Chevron from "./chevron.svg"

export const PriceDepend = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <Title tag="h2" className={s.title}>
          What does the price <br /> <span>depend on?</span>
        </Title>
        <div className={s.wrap}>
          <div className={s.left}>
            <Image src={Billy} alt="asd" layout="responsive" />
          </div>

          <div className={s.right}>
            <div className={s.item}>
              <Chevron className={s.item__icon} />
              <div className={s.item__info}>
                <h4>Your budget</h4>
                <p>
                  First of all, we focus on your request and conditions. That`s
                  why we analyze and compare costs based on the figures you have
                  set.
                </p>
              </div>
            </div>

            <div className={s.item}>
              <Chevron className={s.item__icon} />
              <div className={s.item__info}>
                <h4>The cost of expert services</h4>
                <p>
                  Executive education is a very fragmented and intransparent
                  market where expert fees can range from USD 200 per hour to
                  USD 200,000 per hour
                </p>
              </div>
            </div>

            <div className={s.item}>
              <Chevron className={s.item__icon} />
              <div className={s.item__info}>
                <h4>Logistics </h4>
                <p>
                  We cooperate with experts from all over the world and are
                  ready to help with both online and face-to-face learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
