import s from "./IndexCard.module.scss";
import HomeIcon from "./home.svg";
import PinIcon from "./pin.svg";
import Link from "next/link";

export const IndexCard = ({ item }) => {
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  console.log(
    new Date(item.occasion.start_at).toLocaleDateString("en-US", options)
  );
  return (
    <Link href={`https://coursalytics.com/courses/${item.slug}`}>
      <div className={s.card}>
        <h3>{item.name}</h3>
        <div className={s.row}>
          <HomeIcon />
          <p className={s.address}>{item.division.title}</p>
        </div>
        <div className={s.row}>
          <PinIcon />
          <p className={s.location}>{item.occasion.location}</p>
        </div>
        <p className={s.date}>
          {new Date(item.occasion.start_at).toLocaleDateString(
            "en-US",
            options
          )}
        </p>
      </div>
    </Link>
  );
};
