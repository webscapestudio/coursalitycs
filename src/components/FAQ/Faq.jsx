import s from "./Faq.module.scss";
import { Accordition, AccorditionItem, Title } from "../../ui";
import cn from "classnames";
import ChevronIcon from "./chevron.svg";

export const Faq = ({ data }) => {
  return (
    <section className={s.faq}>
      <div className="container">
        <Title tag="h2" className={s.title}>
          Questions and answers
        </Title>

        <div className={s.accordeon}>
          <Accordition>
            {data.map((item) => (
              <AccorditionItem
                key={item.id}
                title={item.title}
                content={item.content}
              />
            ))}
          </Accordition>
        </div>
      </div>
    </section>
  );
};
