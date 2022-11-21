import { Title } from "../../ui";
import s from "./PriceDepend.module.scss";
import Billy from "./billy.png";
import Image from "next/image";
import Chevron from "./chevron.svg";

export const PriceDependResearch = () => {
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
                <h4>Research scope and complexity</h4>
                <p>
                  Our costs depend on the number of stages of the study, the number of sources and data, the size and
                  duration of the stud
                </p>
              </div>
            </div>

            <div className={s.item}>
              <Chevron className={s.item__icon} />
              <div className={s.item__info}>
                <h4>Technologies and methods</h4>
                <p>
                  The price depends on whether new technological solutions are needed or existing ones are sufficient.
                </p>
              </div>
            </div>

            <div className={s.item}>
              <Chevron className={s.item__icon} />
              <div className={s.item__info}>
                <h4>Your budget </h4>
                <p>
                  We focus on your request and conditions. That's why we analyze and compare costs based on the figures
                  you have set.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
