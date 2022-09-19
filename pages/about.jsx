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
import {
  Callback,
  CoursesSlider,
  Examples,
  HowItWorks,
  WeServe,
} from "../src/components";

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
      title: "A series of 30+ thought leadership seminars",
      text: "by top professors on business topics of importance in the post-COVID-19 world for an omni-channel media holding",
    },

    {
      id: 2,
      icon: ListIcon,
      title:
        "4-hour workshop with an artificial intelligence C-level practitioner",
      text: "from a billion-dollar corporation for one of the largest mining companies",
    },

    {
      id: 3,
      icon: DataIcon,
      title: "A series of 4 four-hour live online seminars",
      text: "on HR Innovation with educators from top US business schools for a leading media company",
    },

    {
      id: 4,
      icon: UsersIcon,
      title: "1-day live online seminar",
      text: "with an expert in cross-cultural communication for a national oil company",
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
                  <span>Coursalytics</span> is an Executive Education
                  marketplace making it{" "}
                  <span>easy to find, compare, and book </span> executive
                  programs and individual experts time for meetings live online
                  and in-person <span>all over the world</span>
                </Title>
                {/* 
                <div className={s.btns}>
                  <Button className={s.btn}>Request a demo</Button>
                  <Button className={s.btn} style="accent">
                    Contact us
                  </Button>
                </div> */}
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

        <CoursesSlider />

        <section id="cb" className={s.callback}>
          <div className="container">
            <Callback />
          </div>
        </section>
      </MainLayout>
    </>
  );
}
