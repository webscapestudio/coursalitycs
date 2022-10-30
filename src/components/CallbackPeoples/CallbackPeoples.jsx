import Image from "next/image";
import s from "./Callback.module.scss";
import Billy from "./billy.png";
import { Button, Checkbox, Input, Title } from "../../ui";
import Link from "next/link";

export const CallbackPeoples = () => {
  return (
    <div className={s.callback}>
      <div className={s.wrap}>
        <div className={s.left}>
          <Image src={Billy} layout="responsive" alt="billy" />
        </div>
        <div className={s.right}>
          <Title tag="h3" className={s.title}>
            Have questions or need <br /> <span>more information?</span>
          </Title>

          <p>Contact us and we'll find the best option for you.</p>

          <form action="">
            <Input className={s.input} placeholder="Full name" />
            <Input className={s.input} placeholder="Email" type="email" />
            <div className={s.policy}>
              <Checkbox />
              <p>
                I agree to{" "}
                <Link href="privacy-policy">terms and conditions</Link> and to
                the processing of my personal data to receive communication from
                Coursalitycis and its partners
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
