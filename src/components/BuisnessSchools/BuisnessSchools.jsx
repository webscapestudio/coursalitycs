/* eslint-disable react/no-unescaped-entities */
import { Title } from "../../ui";
import s from "./BuisnessSchools.module.scss";
import IconSvg from "./teacher.svg";

export const BuisnessSchools = () => {
  const list = [
    "University of Oxford",
    "University of Cambridge",
    "Harvard University",
    "Cornell University",
    "Wharton University of Pennsylvania",
    "Michigan Ross",
    "Stanford University",
    "Chicago Booth",
    "ESMT Berlin",
    "Frankfurt School of Finance & Management",
    "INSEAD",
    "IMD",
  ];
  return (
    <section className={s.section}>
      <div className="container">
        <Title tag="h2" className={s.title}>
          Our clients enter the world's <br /> <span>top business schools</span>
        </Title>

        <div className={s.wrap}>
          <div className={s.list}>
            {list.map((item, i) => (
              <div key={i} className={s.item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
