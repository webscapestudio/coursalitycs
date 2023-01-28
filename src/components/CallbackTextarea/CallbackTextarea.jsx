import Image from "next/image";
import s from "./Callback.module.scss";
import Billy from "./billy.png";
import { Button, Checkbox, Input, Textarea, Title } from "../../ui";
import Link from "next/link";

export const CallbackTextarea = () => {
  return (
    <div className={s.callback}>
      <div className={s.wrap}>
        <div className={s.left}>
          <Image src={Billy} layout="responsive" alt="billy" />
        </div>
        <div className={s.right}>
          <Title tag="h3" className={s.title}>
            Interested to <span>learn more?</span>
          </Title>

          <p>
            Contact us and our team members will reach out to discuss your
            learning objectives.
          </p>

          <form action="">
            <Input className={s.input} placeholder="Full name" />
            <Input className={s.input} placeholder="Email" type="email" />
            <Textarea className={s.input} placeholder="Your question" />
            <div className={s.policy}>
              <Checkbox />
              <p>
                I agree to{" "}
                <Link href="privacy-policy">terms and conditions</Link> and to
                the processing of my personal data to receive communication from
                Coursalytics and its partners
              </p>
            </div>

            <Button type="submit" className={s.btn} style="accent">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
