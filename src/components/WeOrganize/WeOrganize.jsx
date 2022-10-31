import cn from "classnames";
import React from "react";
import { Title } from "../../ui";
import s from "./WeOrganize.module.scss";
import Icon from "./icon.svg";

export const WeOrganize = ({ title, data, className, ...props }) => {
  return (
    <section className={cn(s.section, className)}>
      <div className="container">
        <Title tag="h2" className={s.title}>
          {title}
        </Title>

        <div className={s.scroll}>
          <div className={s.wrap}>
            {data.map((item, i) => (
              <div key={i} className={s.item}>
                <Icon className={s.icon} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
