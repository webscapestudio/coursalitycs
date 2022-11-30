import cn from "classnames";
import { Button, Title } from "../../ui";
import s from "./CallbackSmall.module.scss";

export const CallbackSmall = ({ className, link }) => {
  console.log(link);
  return (
    <section className={cn(s.card, className)}>
      <div className="container-full">
        <div className={s.wrap}>
          <Title tag="h2" className={s.title}>
            Tell us about <span>your business goals</span>, objectives, and
            expectations and we will find the best learning option for you.
          </Title>

          <Button style="accent" link={link} className={s.btn}>
            Fill out an application
          </Button>
        </div>
      </div>
    </section>
  );
};
