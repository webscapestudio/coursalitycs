import cn from "classnames";
import Head from "next/head";
import Image from "next/image";
import MainLayout from "../src/layouts/MainLayout";
import { Button, SliderArrow, Title } from "../src/ui";
import s from "./index.module.scss";
import billy from "./billy.png";
import CalendarIcon from "../public/img/calendar.svg";
import MailIcon from "../public/img/mail.svg";
import SearchIcon from "../public/img/search.svg";
import HeroUserImage from "../public/img/hero_user.jpg";

import DigitalIcon from "../public/img/topics/digital.svg";
import FinanceIcon from "../public/img/topics/finance.svg";
import HumanIcon from "../public/img/topics/human.svg";
import LeadershipIcon from "../public/img/topics/leadership.svg";
import MarketingIcon from "../public/img/topics/marking.svg";
import NegotiationsIcon from "../public/img/topics/negotiations.svg";
import StrategyIcon from "../public/img/topics/strategy.svg";
import WomanIcon from "../public/img/topics/woman.svg";

import {
  Callback,
  CallbackSmall,
  Reviews,
  TabsComponent,
  TextLine,
  Topics,
  Quiz,
  Faq,
  CoursesSlider,
  ExpertsSlider,
} from "../src/components";
import Reviews1 from "../public/img/reviews/1.jpg";
import Reviews2 from "../public/img/reviews/2.jpg";
import Reviews3 from "../public/img/reviews/3.jpg";
import axios from "axios";

export default function Home({  experts }) {
  const expertsData = experts;

  const topicsData = [
    {
      id: 1,
      title: "Strategy",
      link: "/",
      img: <StrategyIcon />,
      text: "Over 150 topics",
    },
    {
      id: 2,
      title: "Women Leadership",
      link: "/",
      img: <WomanIcon />,
      text: "Over 150 topics",
    },
    {
      id: 3,
      title: " Leadership",
      link: "/",
      img: <LeadershipIcon />,
      text: "Over 150 topics",
    },
    {
      id: 4,
      title: "Marketing",
      link: "/",
      img: <MarketingIcon />,
      text: "Over 150 topics",
    },
    {
      id: 5,
      title: "Human Capital",
      link: "/",
      img: <HumanIcon />,
      text: "Over 150 topics",
    },
    {
      id: 6,
      title: "Digital Transformation",
      link: "/",
      img: <DigitalIcon />,
      text: "Over 150 topics",
    },
    {
      id: 7,
      title: "Finance",
      link: "/",
      img: <FinanceIcon />,
      text: "Over 150 topics",
    },
    {
      id: 8,
      title: "Negotiations",
      link: "/",
      img: <NegotiationsIcon />,
      text: "Over 150 topics",
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
        <title>Coursalytics | Main</title>
        <meta name="description" content="Autocontent" />
      </Head>

      <MainLayout>
        <main className={cn("main")}>
          <section className={s.hero}>
            <div className="container">
              <div className={s.hero__wrap}>
                <Title tag="h1" className={cn(s.hero__title)}>
                  Start learning smarter <span>now</span>
                </Title>
                <p className={s.hero__subtitle}>
                  We make it easy to find, compare, and book executive programs
                  and individual experts time for meetings live online and
                  in-person all over the world
                </p>

                <div className={s.hero__btn}>
                  <Button link="/experts">Search Experts</Button>
                  <Button style="accent">Browse Courses</Button>
                </div>

                <div className={s.hero__info}>
                  <div className="hero__image">
                    <Image
                      src={billy}
                      width={"204px"}
                      height={"224px"}
                      alt="coursalytics"
                    />
                  </div>

                  <div className={s.hero__info_item}>
                    <MailIcon />
                    <div className={s.info}>
                      <h4>Congratulations</h4>
                      <p>Your admission completed</p>
                    </div>
                  </div>

                  <div className={s.hero__info_item}>
                    <SearchIcon />
                  </div>

                  <div className={s.hero__info_item}>
                    <CalendarIcon />
                    <div className={s.info}>
                      <h4>240k</h4>
                      <p>Assisted Student</p>
                    </div>
                  </div>

                  <div className={s.hero__user}>
                    <div className={s.hero__user_top}>
                      <div className={s.hero__user_img}>
                        <Image
                          src={HeroUserImage}
                          width="33px"
                          height="33px"
                          alt="User"
                        />

                        <div className={s.status}></div>
                      </div>
                    </div>
                    <div className={s.info}>
                      <h4>User Experience Class</h4>
                      <p>Today at 12.00 PM</p>
                      <Button size="sm" style="red">
                        Join Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={s.tabs}>
            <div className="container">
              <Title tag="h2" className={s.tabs__title}>
                One-stop shop for all <span>your executive </span> <br />{" "}
                education needs
              </Title>

              <div className={s.tabs__wrap}>
                <TabsComponent />
              </div>
            </div>
          </section>

          <CoursesSlider />

          <ExpertsSlider data={expertsData} />

          <section className={s.callback}>
            <div className="container">
              <Callback />
            </div>
          </section>

          <section className={s.topics__section}>
            <div className="container">
              <Title tag="h2" className={s.title}>
                We offer programs in the most <span>topical fields</span>
              </Title>

              <Topics data={topicsData} />
            </div>
          </section>

          <section className={s.reviews__section}>
            <div className="container-xl">
              <Title tag="h2" className={s.title}>
                What prior courses <br /> participants <span>have to say</span>
              </Title>

              <Reviews data={reviewsData} />
            </div>
          </section>

          <CallbackSmall />

          <TextLine />

          <Quiz />

          <Faq data={faqData} />
        </main>
      </MainLayout>

    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    `https://ca-production.coursalytics.com/api/homepage/popular_courses`
  );
  const expRes = await axios.get(
    "https://ca-production.coursalytics.com/api/homepage/experts"
  );
  const topics = await res.data;
  const experts = await expRes.data;
  return { props: { topics, experts } };
}
