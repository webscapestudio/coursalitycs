import Head from "next/head";
import MainLayout from "../src/layouts/MainLayout";
import { Button, Title } from "../src/ui";
import s from "./about.module.scss";
import About from "../public/img/about.png";
import Image from "next/image";
import ArrowIcon from "../public/img/examples/arrow.svg";
import DataIcon from "../public/img/examples/data.svg";
import ListIcon from "../public/img/examples/list.svg";
import PenIcon from "../public/img/examples/pen.svg";
import UsersIcon from "../public/img/examples/users.svg";
import { Widget } from "@typeform/embed-react";
import { Callback, CallbackTextarea, CoursesSlider, Examples, HowItWorks, WeServe } from "../src/components";
import { MeetOurTeam, TheLatest } from "../src/screens";

export default function AboutPage() {
  const hiwdata = [
    { id: 1, num: "2015", title: "Year founded" },
    { id: 2, num: "6", title: `Сountries of team members` },
    { id: 3, num: "3000+", title: "People trained" },
    { id: 4, num: "200+", title: "Client engagements completed" },
  ];

  const examplesdata = [
    {
      id: 1,
      icon: ArrowIcon,
      title: "Impact & Commitment",
      text: "We are committed to delivering real-world impact and improving the quality of global education.",
    },

    {
      id: 2,
      icon: ListIcon,
      title: "Innovation & Curiosity",
      text: "We are constantly striving to learn new things and always remain curious and open to innovative approaches and technological innovations.",
    },

    {
      id: 3,
      icon: DataIcon,
      title: "Professionalism & Expertise",
      text: "Сustomers’ success directly depends on the professionalism of the team, so we are dedicated to developing our expertise all the time.",
    },

    {
      id: 4,
      icon: UsersIcon,
      title: "Trust & Openness",
      text: "We believe that trusting and open relationships both within the team and with our customers and partners are essential for successful collaboration.",
    },
  ];
  return (
    <>
      <Head>
        <title>Coursalytics | About</title>
      </Head>

      <MainLayout>
        <section className={s.hero}>
          <div className="container">
            <div className={s.wrap}>
              <div className={s.left}>
                <Title tag="h1" className={s.title}>
                  <span>Coursalytics</span> is an Executive Education marketplace making it{" "}
                  <span>easy to find, compare, and book </span> executive programs and individual experts time for
                  meetings live online and in-person <span>all over the world</span>
                </Title>

                <div className={s.btns}>
                  <Button className={s.btn}>Request a demo</Button>
                </div>
              </div>

              <div className={s.right}>
                <Image src={About} layout="responsive" alt="About" />
              </div>
            </div>
          </div>
        </section>

        <WeServe />

        <HowItWorks
          data={hiwdata}
          title={[
            // eslint-disable-next-line react/jsx-key
            <span>Coursalytics </span>,
            "is a US-based tech company whose founders worked extensively in Europe and Asia, which helps us ",
            // eslint-disable-next-line react/jsx-key
            <span>combine access to top executive providers</span>,
            " and faculty with deep understanding of emerging markets and a ",
            // eslint-disable-next-line react/jsx-key
            <span>strong appreciation for rapid technological change</span>,
          ]}
        />

        <Examples
          data={examplesdata}
          four
          // eslint-disable-next-line react/jsx-key
          title={["Our", <span> values</span>]}
        />

        <MeetOurTeam />

        <CoursesSlider />

        <TheLatest />

        <section id="cb" className={s.callback}>
          <div className="container">
            <CallbackTextarea />
          </div>
        </section>
      </MainLayout>
    </>
  );
}
