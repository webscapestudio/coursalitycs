import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { Button, Checkbox, Input, Title } from "../../ui";
import girl from "./girl.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import s from "./Modal.module.scss";
import Link from "next/link";
import CloseSvg from "./close-icon.svg";

export const RequestModal = ({ isOpen, closeModal }) => {
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
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={s.responsive__modal}>
                <CloseSvg onClick={closeModal} className={s.close__icon} />

                <div className={s.wrap}>
                  <div className={s.left}>
                    <Image src={girl} layout="responsive" className="w-full" />
                  </div>
                  {isSend ? (
                    <div className={s.right}>
                      <Title tag="h2" className={s.title}>
                        {[
                          <span>Thank you </span>,
                          "for ",
                          <br />,
                          "contacting us!",
                        ]}
                      </Title>
                      <p className={s.subtitle}>We’ll be in touch shortly.</p>
                    </div>
                  ) : (
                    <div className={s.right}>
                      <Title tag="h2" className={s.title}>
                        {["Request", " ", "a", " ", <span>demo</span>]}
                      </Title>
                      <p className={s.subtitle}>
                        Contact us to get an in-depth product tour.
                      </p>

                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={s.form}
                      >
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
                        <div className="flex gap-4">
                          <Checkbox
                            label={[
                              "I agree to",
                              " ",
                              <Link href="website-terms-of-use">
                                terms and conditions
                              </Link>,
                              " ",
                              "and to the processing of my personal data to receive communication from Coursalytics and its partners",
                            ]}
                          />
                          <p></p>
                        </div>

                        <Button type="submit" className={s.btn} style="accent">
                          Submit
                        </Button>
                      </form>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
