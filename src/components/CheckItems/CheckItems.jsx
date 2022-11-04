import React from "react";
import s from "./CheckItems.module.scss";
import CheckIcon from "./check.svg";

export const CheckItems = ({ data, className }) => {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.scroll}>
          <div className={s.wrap}>
            {data.map((item) => (
              <div className={s.item} key={item.id}>
                <div className={s.top}>
                  <CheckIcon className={s.icon} />
                  <h4>{item.title}</h4>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
