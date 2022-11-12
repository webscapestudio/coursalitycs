import Image from "next/image";
import s from "./Callback.module.scss";
import Billy from "./billy.png";
import { Button, Checkbox, Input, Title } from "../../ui";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Callback = () => {
  const schema = yup
    .object()
    .shape({
      email: yup.string().required(),
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

  const onSubmit = (data) => {
    console.log(data);
  };

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

          <p>Contact us and our team members will reach out to discuss your learning objectives.</p>

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
                I agree to <Link href="privacy-policy">terms and conditions</Link> and to the processing of my personal
                data to receive communication from Coursalitycis and its partners
              </p>
            </div>

            <Button submit={true} className={s.btn} style="accent">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
