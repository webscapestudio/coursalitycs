import cn from "classnames";
import { Button, Title } from "../../ui";
import s from "./CallbackSmall.module.scss";

export const CallbackSmall = ({ className, link }) => {
  return (
    <section className={cn(s.card, className)}>
      <div className="container-full">
        <div className={s.wrap}>
          <Title tag="h2" className={s.title}>
            Tell us about <span>your business goals</span>, objectives, and expectations and we will find the best
            learning option for you.
          </Title>

          <Button style="accent" className={s.btn}>
            <a href="#quiz">Fill out an application</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
