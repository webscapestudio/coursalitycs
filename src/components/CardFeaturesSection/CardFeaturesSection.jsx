import { Title } from "../../ui";
import s from "./CardFeaturesSection.module.scss";

export const CardFeaturesSection = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.item}>
            <h4>
              We operate the largest database of executive programs globally
            </h4>
            <p>
              We maintain an up-to-date database which contains over 20 thousand
              online and in-person open enrollment programs offered all over the
              world
            </p>
          </div>

          <div className={s.item}>
            <h4>Thousands of unique reviews from past participants</h4>
            <p>
              Reviews include overall score, relevance, faculty knowledge of the
              subject matter, ability to engage participants, quality of
              materials and more
            </p>
          </div>

          <div className={s.item}>
            <h4>Variety of program formats and participation opportunities</h4>
            <p>
              We help with admission to both long-term (Master's degree, PhD,
              DBA) and short-term courses offline and online. We are open to
              help you enroll in all programs — even those that are not on our
              website.
            </p>
          </div>

          <div className={s.item}>
            <h4>
              Educational concierge service to help you save time and effort
            </h4>
            <p>
              You don't need to think about organizational issues, understand
              the admission rules, follow updates and deadlines — we will take
              care of everything
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
