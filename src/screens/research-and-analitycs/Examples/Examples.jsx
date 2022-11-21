import cn from "classnames";
import { Title } from "../../../ui";

import s from "./Examples.module.scss";

export const ExamplesResearchAndAnalytics = ({ data, title, four, className }) => {
  return (
    <section className={s.examples}>
      <div className="container">
        <Title tag="h2" className={s.title}>
          {title
            ? title
            : [
                "Examples of",
                // eslint-disable-next-line react/jsx-key
                <span> completed projects</span>,
              ]}
        </Title>
        <div
          className={cn(s.wrap, {
            [s.four]: four,
          })}
        >
          {data &&
            data.map((item) => (
              <div key={item.id} className={s.item}>
                <div className={s.item__top}>
                  <item.icon className={s.icon} />
                  <p className={s.title}>{item.title}</p>
                </div>
                <p className={s.client}>{item.sub}</p>
                <p className={s.text}>{item.text}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
