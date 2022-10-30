import s from "./HelpToEnroll.module.scss";
import { Title } from "../../ui";
import Check from "./check.svg";
import cn from "classnames";

export const HelpToEnroll = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <Title tag="h2" className={s.title}>
          We <span>help to enroll</span> in long-term and short-term programs in{" "}
          <span>various fields:</span> from business to medicine
        </Title>
        <div className={s.scroll}>
          <div className={s.wrap}>
            <div className={cn(s.fx, s.vertical)}></div>
            <div className={cn(s.fx, s.horizontal)}></div>
            <div className={s.item}>
              <Check className={s.item__icon} />
              <p className={s.item__text}>
                Coaching sessions to help organize participation in the program{" "}
              </p>
            </div>

            <div className={s.item}>
              <Check className={s.item__icon} />
              <p className={s.item__text}>
                Conducting research to produce outstanding resumes and
                motivation letters
              </p>
            </div>

            <div className={s.item}>
              <Check className={s.item__icon} />
              <p className={s.item__text}>
                Consultations and video calls (if needed) with your personal
                manager
              </p>
            </div>

            <div className={s.item}>
              <Check className={s.item__icon} />
              <p className={s.item__text}>
                Preparation of the necessary documents and support at every
                stage of admission
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
