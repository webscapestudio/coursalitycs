import Head from "next/head";
import ReactTypingEffect from "react-typing-effect";
import {
  CallbackSmall,
  CoursesSlider,
  Examples,
  Faq,
  HelpToEnroll,
  HowItWorks,
  IndexCard,
  PriceDepend,
  Reviews,
  ReviewsSection,
  TextLine,
} from "../src/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import MainLayout from "../src/layouts/MainLayout";
import { Button, SliderArrow, Title } from "../src/ui";
import s from "./programs.module.scss";
import { useRef } from "react";
import cn from "classnames";
import ArrowIcon from "../public/img/examples/arrow.svg";
import DataIcon from "../public/img/examples/data.svg";
import ListIcon from "../public/img/examples/list.svg";
import PenIcon from "../public/img/examples/pen.svg";
import UsersIcon from "../public/img/examples/users.svg";
import Reviews1 from "../public/img/reviews/1.jpg";
import Reviews2 from "../public/img/reviews/2.jpg";
import Reviews3 from "../public/img/reviews/3.jpg";

export default function Programs() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const infoCards = [
    {
      id: 1,
      title: "Advanced Human Resource Executive Program",
      address: "Stephen M. Ross School of Business",
      map: "Ann Arbor, Michigan, United States",
      date: "Jul 11—22, 2022",
    },
    {
      id: 2,
      title:
        "The Positive Leader: Deep Change and Organizational Transformation",
      address: "Stephen M. Ross School of Business",
      map: "Ann Arbor, Michigan, United States",
      date: "Jun 19—24, 2022",
    },
    {
      id: 3,
      title: "The Manchester Leadership Development Programme",
      address: "Alliance Manchester Business School",
      map: "Manchester, United Kingdom",
      date: "Jul 4—8, 2022",
    },
    {
      id: 4,
      title: "Strategic Human Resource Leadership",
      address: "Rotman School of Management",
      map: "Toronto, Ontario, Canada",
      date: "May 2—6, 2022",
    },
    {
      id: 5,
      title: "Leading Strategic Growth and Change",
      address: "Columbia Business School",
      map: "New York, United States",
      date: "Jul 11—22, 2022",
    },
  ];
  const howData = [
    {
      id: 1,
      num: "01",
      title:
        "Tell us about your learning objectives and educational programs of interest",
    },
    {
      id: 2,
      num: "02",
      title:
        "Make the best program choice with the help of our recommendations and coaching sessions",
    },
    {
      id: 3,
      num: "03",
      title:
        "Let us take over the organization of your admission (except what can't be done without you)",
    },
  ];

  const examplesData = [
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

    {
      id: 5,
      icon: UsersIcon,
      title: "A series of 4 one-on-one mentorship",
      text: "sessions with a music business management expert for a serial entrepreneur",
    },
    {
      id: 6,
      icon: PenIcon,
      title: "1-hour foresight session",
      text: "with a leading future scenario planning thinker for a global metals and mining company",
    },
  ];

  const reviewsData = [
    {
      id: 1,
      title: "Digital Strategies for Business at Columbia Business School",
      name: "Talent Development Leader at a global consulting company from North America",
      text: "«The course provided me with significant opportunities to learn and think about things differently. It gave me a broad appreciation for digital disruption and the transformation taking place across industries.»",
      img: Reviews1,
    },
    {
      id: 2,
      title: "Digital Strategies for Business at Columbia Business School",
      name: "Talent Development Leader at a global consulting company from North America",
      text: "«The course provided me with significant opportunities to learn and think about things differently. It gave me a broad appreciation for digital disruption and the transformation taking place across industries.»",
      img: Reviews2,
    },
    {
      id: 3,
      title: "Digital Strategies for Business at Columbia Business School",
      name: "Talent Development Leader at a global consulting company from North America",
      text: "«The course provided me with significant opportunities to learn and think about things differently. It gave me a broad appreciation for digital disruption and the transformation taking place across industries.»",
      img: Reviews3,
    },
  ];

  const faqData = [
    {
      id: 1,
      title: "What are the possible training formats?",
      content:
        "We offer a variety of training formats — from an hour-long online consultation to multi-module offline programs. Almost everything is possible, it completely depends on your wishes. If you are not exactly sure what you need, we will recommend the best option based on your goals.",
    },
    {
      id: 2,
      title: "What languages can I study in?",
      content:
        "We offer a variety of training formats — from an hour-long online consultation to multi-module offline programs. Almost everything is possible, it completely depends on your wishes. If you are not exactly sure what you need, we will recommend the best option based on your goals.",
    },
    {
      id: 3,
      title:
        "What if the language spoken in the company does not correspond to the language?",
      content:
        "We offer a variety of training formats — from an hour-long online consultation to multi-module offline programs. Almost everything is possible, it completely depends on your wishes. If you are not exactly sure what you need, we will recommend the best option based on your goals.",
    },
    {
      id: 4,
      title: "How long does it take to find and choose an expert?",
      content:
        "We offer a variety of training formats — from an hour-long online consultation to multi-module offline programs. Almost everything is possible, it completely depends on your wishes. If you are not exactly sure what you need, we will recommend the best option based on your goals.",
    },
    {
      id: 5,
      title:
        "Is it possible to request more than one expert for several events?",
      content:
        "We offer a variety of training formats — from an hour-long online consultation to multi-module offline programs. Almost everything is possible, it completely depends on your wishes. If you are not exactly sure what you need, we will recommend the best option based on your goals.",
    },
  ];
  return (
    <>
      <Head>
        <title>Coursalytics | Programs</title>
        <meta name="description" content="Autocontent" />
      </Head>

      <MainLayout>
        <section className={s.hero}>
          <div className="container">
            <Title tag="h1" className={s.hero__title}>
              Selection and booking of executive programs offered by <br />{" "}
              <ReactTypingEffect
                speed={50}
                typingDelay={100}
                eraseDelay={100}
                className={s.typing}
                text={[
                  "top business schools",
                  "non-university providers",
                  "schools of public administration",
                  "law schools",
                ]}
              />{" "}
              <br />
              all over the world
            </Title>
          </div>
        </section>


        <HowItWorks data={howData} title={["How", <span> it works</span>]} />

        <HelpToEnroll />

        <CoursesSlider />

        <Examples data={examplesData} />

        <ReviewsSection data={reviewsData} />

        <PriceDepend />

        <TextLine />

        <CallbackSmall />

        <Faq data={faqData} />
      </MainLayout>
    </>
  );
}
