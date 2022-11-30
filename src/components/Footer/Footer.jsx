import s from "./Footer.module.scss";
import { Button, Input, Succes } from "../../ui/index";
import Link from "next/link";
import { Socials } from "../Socials/Socials";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const Footer = () => {
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    register("utm_source", "utm_source");
  }, []);

  const schema = yup
    .object()
    .shape({
      email: yup.string().required().email(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      utm_source: "subscribe_for_updates",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://ca-production.coursalytics.com/api/request/info", data)
      .then(setIsSend(true));
    // .then(setIsModalOpen(false));
  };
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.top}>
          <nav>
            <div className={s.footer__item}>
              <h4>Coursalytics</h4>
              <ul>
                <li>
                  <Link href="/website-terms-of-use">Terms of Use</Link>
                </li>

                <li>
                  <Link href="/privacy-policy">Privacy</Link>
                </li>
              </ul>
            </div>

            <div className={s.footer__item}>
              <h4>Services</h4>
              <ul>
                <li>
                  <Link href="https://coursalytics.com/experts-booking">
                    Experts’ booking
                  </Link>
                </li>

                <li>
                  <Link href="https://coursalytics.com/executive-programs">
                    Executive programs
                  </Link>
                </li>

                <li>
                  <Link href="https://coursalytics.com/customized-programs">
                    Customized programs
                  </Link>
                </li>

                <li>
                  <Link href="/research-and-analytics">
                    Research & Analytics
                  </Link>
                </li>
              </ul>
            </div>

            <div className={s.footer__item}>
              <h4>More info</h4>
              <ul>
                <li>
                  <Link href="https://coursalytics.com/blog/">Blog</Link>
                </li>

                <li>
                  <Link href="/about">About Us</Link>
                </li>

                <li>
                  <Link href="/frequently-asked-questions">FAQ</Link>
                </li>

                <li>
                  <a href="mailto:hello@coursalytics.com">
                    Contact Us By Email
                  </a>
                </li>
              </ul>
            </div>

            <div className={s.footer__item}>
              <h4>Subscribe for updates</h4>

              <div className={s.footer__item_info}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    placeholder="Email"
                    errorText={errors.email?.message}
                    form={{ ...register("email") }}
                  />

                  <div className={s.form__bottom}>
                    <Button
                      size="md"
                      submit
                      className={s.footer__btn}
                      style="accent"
                    >
                      Submit
                    </Button>
                    {isSend && <Succes className={s.succes} />}
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </div>

        <div className={s.bottom}>
          <div className={s.bottom__text}>
            <p>
              All school and university names, program names, course names,
              brochures, logos, videos, images, and brands are property of their
              respective owners and not Coursalytics. All school and university
              names, program names, course names, brochures, logos, videos,
              images, and brand references used in this website are for
              identification and informational purposes only. Use of these
              school and university names, program names, course names,
              brochures, logos, videos, images, and brand references does not
              imply endorsement by, sponsorship by, or affiliation with the
              underlying school or university.
            </p>

            <ul>
              <li>Photos: Unsplash</li>
              <li>Logos provided by Clearbit</li>
              <li>Find jobs at Jooble</li>
            </ul>

            <p>
              This product includes GeoLite2 data created by MaxMind, available
              from maxmind.com
            </p>
          </div>

          <div className={s.socials}>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};
