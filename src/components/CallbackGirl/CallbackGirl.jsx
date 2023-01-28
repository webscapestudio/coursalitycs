import Image from "next/image";
import s from "./Callback.module.scss";
import Billy from "./billy.png";
import { Button, Checkbox, Input, Title } from "../../ui";
import Link from "next/link";
import Sended from "./sended.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";

export const CallbackGirl = () => {
  const [isSend, setIsSend] = useState(false);
  const schema = yup
    .object()
    .shape({
      email: yup.string().required().email(),
      name: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await axios
      .post("https://ca-production.coursalytics.com/api/request/info", data)
      .then(setIsSend(true));
  };

  return (
    <div className={s.callback}>
      {!isSend ? (
        <div className={s.wrap}>
          <div className={s.left}>
            <Image src={Billy} layout="responsive" alt="billy" />
          </div>
          <div className={s.right}>
            <Title tag="h3" className={s.title}>
              Have questions or need <br /> <span>more information?</span>
            </Title>

            <p>Contact us and we'll find the best option for you.</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                className={s.input}
                placeholder="Full name"
                errorText={errors.name?.message}
                form={{ ...register("name") }}
              />

              <Input
                className={s.input}
                placeholder="Email"
                type="email"
                errorText={errors.email?.message}
                form={{ ...register("email") }}
              />
              <div className={s.policy}>
                <Checkbox />
                <p>
                  I agree to{" "}
                  <Link href="website-terms-of-use">terms and conditions</Link>{" "}
                  and to the processing of my personal data to receive
                  communication from Coursalytics and its partners
                </p>
              </div>

              <Button type="submit" className={s.btn} style="accent">
                Submit
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <div className={s.wrap}>
          <div className={s.left}>
            <Image src={Sended} layout="responsive" alt="billy" />
          </div>
          <div className={s.right}>
            <Title tag="h3" className={s.title}>
              Thank you for <span>submitting!</span>
            </Title>

            <p>
              Our team members will reach out to discuss your learning
              objectives.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
