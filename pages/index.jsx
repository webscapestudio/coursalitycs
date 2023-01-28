// @ts-nocheck
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
  TextLine,
  Topics,
  Quiz,
  Faq,
  CoursesSlider,
  ExpertsSlider,
  TabsComponentMain,
} from "../src/components";
import Reviews1 from "../public/img/reviews/1.jpg";
import Reviews2 from "../public/img/reviews/2.jpg";
import Reviews3 from "../public/img/reviews/3.jpg";
import expert1 from "../src/components/ExpertsSlider/assets/Helio_Fred_Garcia.jpg";
import expert2 from "../src/components/ExpertsSlider/assets/Antonie_Knoppers.jpg";
import expert3 from "../src/components/ExpertsSlider/assets/Massimo_Massa.jpg";
import expert4 from "../src/components/ExpertsSlider/assets/Shahzad_Ansari.jpg";
import expert5 from "../src/components/ExpertsSlider/assets/Serguei_Netessine.jpg";
import axios from "axios";

export default function Home({ experts, topics }) {
  const expertsData = [
    {
      id: 1,
      photo: expert1,
      name: "Helio Fred Garcia",
      text: "I’ve had the good fortune of working in a world of crisis for nearly 40 years teaching it for more than 30 years. And one thing that I and my firm find when we study crises is they follow predictable patterns. There are predictable patterns of human behavior which you know from a marketing perspective, but there are also predictable patterns of organizational behavior, of stakeholder behavior when things go wrong.",
      position:
        "Adjunct Associate Professor of Professional Development and Leadership at Columbia Engineering",
    },
    {
      id: 2,
      photo: expert2,
      name: "Antonie Knoppers",
      text: [
        "So presence I define as not only being in a moment, which, you know, the word “presence” says “has that being present” but also to authentically connect with anyone you are communicating with in order to motivate them, to inspire them, to convince them. For me leadership is all actually about influencing.",
        <br />,
        "As a leader you want someone to do something, you want them to reach certain goals you have, implement a strategy. And in order to exert influence, “presence” really helps.",
      ],
      position: "Lecturer at at Rotterdam School of Management",
    },
    {
      id: 3,
      photo: expert3,
      name: "Massimo Massa",
      text: "The common thing of all fintech innovation is the backbone of the new people. So what is the new common thing of this economy? It’s the economy of shared resources. If you think about Airbnb we share homes and if you think about Uber we share carpool. If we think about fintech we share a platform so the new economy of fintech is the economy where we try to reduce the waste of resources we believe and trust in each other and we believe in the environment. It’s an economy in which ironically technology is not the most important thing, but a trust among people is.",
      position:
        "Professor of Finance and Co-Director of the Hoffmann Research Fund at INSEAD Business School",
    },
    {
      id: 4,
      photo: expert4,
      name: "Shahzad Ansari",
      text: "I think one of the core things over here is “Is the company innovation-ready?”, which means that “Do you have an innovation mindset?” So you just don’t launch an innovation. It should fit with your overall strategic goals. So it’s not about launching an innovation, it's about having an innovation strategy in order to accomplish the goals that you have.",
      position:
        "Professor of Strategy & Innovation at Cambridge Judge Business School",
    },
    {
      id: 5,
      photo: expert5,
      name: "Serguei Netessine",
      text: [
        "It’s a situation where a whole company is going through a change and they recognise that educating their top-management is part of the change. It’s a part of this monumental transformation of a large company.",
        <br />,
        "So it’s all about experimentation. It’s all about trying new business models, failing with it, most likely. But then embracing one of the successful experiments and moving forward and trying again.",
      ],
      position:
        "Professor of Operations, Information and Decisions; Vice Dean, Global Initiatives at The Wharton School",
    },
  ];

  const topicsData = [
    {
      id: 1,
      title: "Strategy",
      link: "https://coursalytics.com/topics/strategy",
      img: <StrategyIcon />,
      text: "Over 150 topics",
    },
    {
      id: 2,
      title: "Women Leadership",
      link: "https://coursalytics.com/topics/women-leadership",
      img: <WomanIcon />,
      text: "Over 150 topics",
    },
    {
      id: 3,
      title: " Leadership",
      link: "https://coursalytics.com/topics/leadership",
      img: <LeadershipIcon />,
      text: "Over 150 topics",
    },
    {
      id: 4,
      title: "Marketing",
      link: "https://coursalytics.com/topics/marketing",
      img: <MarketingIcon />,
      text: "Over 150 topics",
    },
    {
      id: 5,
      title: "Human Capital",
      link: "https://coursalytics.com/topics/human-capital-management",
      img: <HumanIcon />,
      text: "Over 150 topics",
    },
    {
      id: 6,
      title: "Digital Transformation",
      link: "https://coursalytics.com/topics/digital-transformation",
      img: <DigitalIcon />,
      text: "Over 150 topics",
    },
    {
      id: 7,
      title: "Finance",
      link: "https://coursalytics.com/topics/finance",
      img: <FinanceIcon />,
      text: "Over 150 topics",
    },
    {
      id: 8,
      title: "Negotiations",
      link: "https://coursalytics.com/topics/negotiations",
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
      title: "Women’s Executive Leadership Program at Berkeley",
      name: "Not-for-profit organization leader from North America",
      text: "Personal leadership style evaluations from peers, employers, direct-reports, etc., provided in advance allowed the faculty to provide very tailored feedback to individuals. Extremely helpful!",
      img: Reviews2,
    },
    {
      id: 3,
      title: "Advanced Management Program at Wharton",
      name: "C-level executive of a multibillion IT corporation headquartered in India",
      text: "Most of us usually stick to a single industry. I certainly did. At Wharton there were people from a very diverse set of industries. Meeting them made me realise that there is a world outside banking as well.",
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
        "We cooperate with experts from all over the world, so the language of the event can be any, based on your request.",
    },
    {
      id: 3,
      title:
        "What if the language spoken in the company does not correspond to the language of a potential expert?",
      content:
        "We are sure that the language barrier should not become an obstacle on the way to education. Therefore, our team is always ready to provide a simultaneous translation service for the event. We have been cooperating with the best UN translators for many years, so you don't have to worry about the professionalism and quality of the translation.",
    },
    {
      id: 4,
      title: "How long does it take to find and choose an expert?",
      content:
        "The timing directly depends on your request. Most often, no more than 2 weeks pass from the moment we receive the application to the approval of the speaker by the client.",
    },
    {
      id: 5,
      title:
        "Is it possible to request more than one expert for several events?",
      content:
        "Sure, we do not limit you in the number of experts. We can help you find several specialists for a number of events at once, just include this information in the application.",
    },
  ];

  return (
    <>
      <Head>
        <title>Coursalytics | Main</title>
        <meta
          name="description"
          content="Find and book online thousands of courses all over the world"
          key="desc"
        />
        <meta property="og:title" content="Coursalytics" />
        <meta name="og:site_name" content="Coursalytics"></meta>
        <meta
          property="og:description"
          content="Find and book online thousands of courses all over the world"
        />
        <meta
          property="og:image"
          content="https://coursalytics.com/static/images/og_cover.png"
        />
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
                  Easily create and customize high-quality training programs for
                  executives, with the help of renowned faculty
                </p>

                <div className={s.hero__btn}>
                  <Button link="https://coursalytics.com/experts-booking">
                    Learn More
                  </Button>
                  <Button style="accent" link="#quiz">
                    Get Started
                  </Button>
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
                    <div className={s.info}>
                      <h4>Advanced executive education</h4>
                      <p>Based on real data</p>
                    </div>
                  </div>

                  <div className={s.hero__info_item}>
                    <CalendarIcon />
                    <div className={s.info}>
                      <h4>50k+ </h4>
                      <p>faculty profiles</p>
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
                      <h4>Leadership Class</h4>
                      <p>Today at 12.00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={s.tabs}>
            <div className="container">
              <Title tag="h2" className={s.tabs__title}>
                One-stop shop for all your{" "}
                <span>
                  executive <br /> education
                </span>{" "}
                needs
              </Title>

              <div className={s.tabs__wrap}>
                <TabsComponentMain />
              </div>
            </div>
          </section>

          <CoursesSlider data={topics.courses} />

          <ExpertsSlider data={expertsData} />

          <section className={s.callback}>
            <div className="container">
              <Callback />
            </div>
          </section>

          <section className={s.topics__section}>
            <div className="container">
              <Title tag="h2" className={s.title}>
                We offer programs in the most <span>critical fields</span>
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

          <CallbackSmall link="#quiz" />

          <TextLine />

          <Quiz formId="nbpvPpyj" />

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
