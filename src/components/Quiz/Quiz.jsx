import s from "./Quiz.module.scss";
import Billy from "./billy.png";
import Image from "next/image";
import { ProgressBar, Radio, Title } from "../../ui";
import { useState } from "react";
import { Widget } from "@typeform/embed-react";

export const Quiz = ({ title, formId }) => {
  const [slide, setSlide] = useState(1);
  return (
    <section id="quiz" className={s.quiz}>
      <div className="container">
        <div className={s.slide}>
          <div className={s.left}>
            {/* <Title tag="h2" className={s.main__title}>
              Build your own <span>learning experience</span>
            </Title>
            <p className={s.subtitle}>
              Follow a few steps so that we get to know about your educational
              goals
            </p> */}
            <div className={s.item}>
              <Widget id={formId} className={s.typeform} />
            </div>

            {/* <ProgressBar className={s.bar} range={5} /> */}
          </div>

          <div className={s.right}>
            <Image src={Billy} alt="a" layout="responsive" />
          </div>
        </div>
      </div>
    </section>
  );
};
