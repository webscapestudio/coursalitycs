import { Button, Title } from "../../../ui";
import s from "./TheLatest.module.scss";
import Img1 from "./1.jpg";
import Img2 from "./2.jpg";
import Img3 from "./3.jpg";
import Img4 from "./4.jpg";
import Image from "next/image";

export const TheLatest = () => {
  const data = [
    {
      id: 1,
      title: "Extreme practices in education",
      date: "April 5, 2022",
      timeToRead: "2 min read",
      author: "Sofya Rudyuk",
      image: Img1,
    },

    {
      id: 2,
      title: "Extreme practices in education",
      date: "April 5, 2022",
      timeToRead: "2 min read",
      author: "Ilya Breyman",
      image: Img2,
    },
    {
      id: 3,
      title: "Extreme practices in education",
      date: "April 5, 2022",
      timeToRead: "2 min read",
      author: "Ilya Breyman",
      image: Img3,
    },
    {
      id: 4,
      title: "Extreme practices in education",
      date: "April 5, 2022",
      timeToRead: "2 min read",
      author: "Ilya Breyman",
      image: Img4,
    },
  ];
  return (
    <section className={s.section}>
      <div className="container-xl">
        <Title tag="h2" className={s.title}>
          The latest from <span>Coursalytics</span>
        </Title>
        <div className={s.scroll}>
          <div className={s.wrap}>
            {data.map((item) => (
              <div key={item.id} className={s.card}>
                <div className={s.card__left}>
                  <h4 className={s.card__title}>{item.title}</h4>
                  <p className={s.card__date}>{item.date}</p>
                  <p className={s.card__time}>{item.timeToRead}</p>
                  <p className={s.card__author}>{item.author}</p>
                </div>
                <div className={s.card__right}>
                  <Image
                    src={item.image}
                    width="120"
                    height="120"
                    alt={item.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          style="accent"
          className={s.btn}
          link="https://coursalytics.com/blog/"
        >
          View all
        </Button>
      </div>
    </section>
  );
};
