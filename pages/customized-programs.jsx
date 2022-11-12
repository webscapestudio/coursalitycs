/* eslint-disable react/jsx-key */
import Head from "next/head";
import {
  Callback,
  CallbackSmall,
  Examples,
  ExpertsFour,
  Faq,
  HowItWorks,
  PriceDepend,
  Reviews,
  TextLine,
  WeOrganize,
} from "../src/components";
import ArrowIcon from "../public/img/examples/arrow.svg";
import DataIcon from "../public/img/examples/data.svg";
import ListIcon from "../public/img/examples/list.svg";
import PenIcon from "../public/img/examples/pen.svg";
import UsersIcon from "../public/img/examples/users.svg";
import Reviews1 from "../public/img/reviews/1.jpg";
import Reviews2 from "../public/img/reviews/2.jpg";
import Reviews3 from "../public/img/reviews/3.jpg";
import MainLayout from "../src/layouts/MainLayout";
import { Title } from "../src/ui";
import s from "./customized-programs.module.scss";

export default function CustomizedPrograms() {
  const HowItWorksData = [
    {
      id: 1,
      num: "01",
      title:
        "We study the main objectives of your business development, the specifics of management and educational goals",
    },
    {
      id: 2,
      num: "02",
      title:
        "Based on a series of interviews and business analysis, we make a proposal on how a program could look like",
    },
    {
      id: 3,
      num: "03",
      title:
        "Taking into account your feedback, we create a unique customized program and then manage the entire process of program delivery",
    },
  ];

  const weOrganizeData = [
    "In-depth assessment of educational needs and creation of individual development plans for participants",
    "Research on trends and the most relevant topics and skills in your industry and globally",
    "Building a training program: selection of topics and formats, individual and group assignments, additional materials",
    "Selection, booking and managing experts who will be the best match for you goals",
  ];

  const ExpertsData = [
    {
      id: 1,
      image: "/img/experts/1.jpg",
      name: "Robin Speculand",
      description: "Adjunct faculty member at National University of Singapore",
    },
    {
      id: 2,
      image: "/img/experts/2.jpg",
      name: "Gianvito Lanzolla",
      description: "Professor of Strategy at Bayes Business School",
    },
    {
      id: 3,
      image: "/img/experts/3.jpg",
      name: "Antonio Nieto Rodriguez",
      description: "Independent Project Management Expert at Vlerick Business School",
    },
    {
      id: 4,
      image: "/img/experts/4.jpg",
      name: "Konstantin Korotov ",
      description: "Associate Professor of Organizational Behavior at ESMT Berlin",
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
      title: "4-hour workshop with an artificial intelligence C-level practitioner",
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
        "We cooperate with experts from all over the world, so the language of the event can be any, based on your request.",
    },
    {
      id: 3,
      title: "What if the language spoken in the company does not correspond to the language of a potential expert?",
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
      title: "Is it possible to request more than one expert for several events?",
      content:
        "Sure, we do not limit you in the number of experts. We can help you find several specialists for a number of events at once, just include this information in the application.",
    },
  ];

  return (
    <>
      <Head>
        <title>Coursalytics | Customized Programs</title>
        <meta name="description" content="Autocontent" />
      </Head>

      <MainLayout>
        <section className={s.hero}>
          <div className="container">
            <Title tag="h1" className={s.title}>
              Get a fully developed customized <span>educational program</span>
              created especially for <span>your company</span>
            </Title>
          </div>
        </section>

        <HowItWorks title={["How", <span> it works</span>]} data={HowItWorksData} noButton={true} />

        <WeOrganize
          className
          title={["We ", <span>organize and implement </span>, "educational", <br />, "programs on a turn-key basis"]}
          data={weOrganizeData}
        />

        <ExpertsFour
          title={[
            "In addition to a ",
            <span>unique program </span>,
            "you will get acquainted with ",
            <span>experts whose </span>,
            "experience is trusted not only by us, but also by many organizations ",
            <span>around the world</span>,
          ]}
          data={ExpertsData}
        />

        {/* <h2>Блоки с галочкой</h2> */}

        <section className={s.callback}>
          <div className="container">
            <Callback />
          </div>
        </section>

        <section className={s.sure}>
          <div className="container">
            <Title tag="h2" className={s.sure__title}>
              <span>We make sure</span> that you and your colleagues
            </Title>

            <div className={s.sure__wrap}>
              <div className={s.sure__item}>
                <p>
                  <span>Gain new applied knowledge</span> in your or related field or function
                </p>
              </div>
              <div className={s.div}></div>

              <div className={s.sure__item}>
                <p>
                  <span>Enjoy the process: </span> studying should not be a burden!
                </p>
              </div>
              <div className={s.div}></div>

              <div className={s.sure__item}>
                <p>
                  <span>Get a boost</span> of motivation that will move your team to success
                </p>
              </div>
              <div className={s.div}></div>

              <div className={s.sure__item}>
                <p>
                  <span>Get the maximum benefit</span> with the minimum effort and cost on your part
                </p>
              </div>
            </div>
          </div>
        </section>

        <Examples data={examplesData} />

        <section className={s.reviews__section}>
          <div className="container-xl">
            <Title tag="h2" className={s.title}>
              What prior courses <br /> participants <span>have to say</span>
            </Title>

            <Reviews data={reviewsData} />
          </div>
        </section>

        <PriceDepend />

        <TextLine />

        <CallbackSmall link="https://nm3zw7qlnv7.typeform.com/to/fhYtQaMx" />

        <Faq data={faqData} />
      </MainLayout>
    </>
  );
}
