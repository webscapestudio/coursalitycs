import cn from "classnames";
import { Button, Title } from "../../ui";
import s from "./CallbackSmall.module.scss";

export const CallbackSmall = ({ className }) => {
  return (
    <section className={cn(s.card, className)}>
      <div className="container-full">
        <div className={s.wrap}>
          <Title tag="h2" className={s.title}>
            Tell us about your business goals, objectives, and expectations and
            we will find the best learning option for you.
          </Title>

          <Button style="accent" link="#quiz" className={s.btn}>
            Let us help you
          </Button>
        </div>
      </div>
    </section>
  );
};
