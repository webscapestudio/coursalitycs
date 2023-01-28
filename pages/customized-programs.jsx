/* eslint-disable react/jsx-key */
import Head from "next/head";
import {
  Callback,
  CallbackSmall,
  CheckItems,
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
import axios from "axios";

export default function CustomizedPrograms({ experts }) {
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
      title: "What can be the duration of customized programs?",
      content:
        "We usually design programs lasting from 3 months to a year in order to be able to conduct training in the most efficient and convenient way. However, we can consider another duration depending on your requirements.",
    },
    {
      id: 2,
      title: "What are the possible training formats?",
      content:
        "We offer a variety of training formats — offline meetings, webinars, pre-recorded lectures, combined format. We will recommend the best option based on your goals and wishes.",
    },
    {
      id: 3,
      title: "What languages can I study in?",
      content:
        "We cooperate with experts from all over the world, so the language of the event can be any, based on your request.",
    },
    {
      id: 4,
      title:
        "What if the language spoken in the company does not correspond to the language of a potential expert?",
      content:
        "We are sure that the language barrier should not become an obstacle on the way to education. Therefore, our team is always ready to provide a simultaneous translation service for the event. We have been cooperating with the best UN translators for many years, so you don't have to worry about the professionalism and quality of the translation.",
    },
    {
      id: 5,
      title:
        "Is it possible to request more than one expert for several events?",
      content:
        "Sure, we do not limit you in the number of experts. We can help you find several specialists for a number of events at once, just include this information in the application.",
    },
  ];

  const CheckData = [
    {
      id: 1,
      title: ["Save your time and", <br />, "effort"],
      text: "You don't need to conduct assessments or research — we take care of everything.",
    },
    {
      id: 2,
      title: ["Pay only for what your", <br />, "team needs"],
      text: "Our personal approach ensures that our research includes only what your organization needs — there will be no irrelevant content or topics that you are not interested in.",
    },
    {
      id: 3,
      title: ["Stay informed throughout", <br />, " the process"],
      text: "Your personal manager keeps in touch with you throughout the entire process. Written communication or online meetings – we are always ready to answer your questions.",
    },
    {
      id: 4,
      title: ["Be confident in the", <br />, "quality of training"],
      text: "We have been working in business education for 10+ years and use the most up-to-date research methods and data from relevant industries.",
    },
  ];

  console.log(experts, "asd");
  return (
    <>
      <Head>
        <title>Coursalytics | Customized Programs</title>
        <meta
          name="description"
          content="Find and book online thousands of courses all over the world"
          key="desc"
        />
        <meta property="og:title" content="Customized Propgrams" />
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
        <section className={s.hero}>
          <div className="container">
            <Title tag="h1" className={s.title}>
              Get a fully developed customized <span>educational program </span>
              created especially for <span>your company</span>
            </Title>
          </div>
        </section>

        <HowItWorks
          title={["How", <span> it works</span>]}
          data={HowItWorksData}
          noButton={true}
        />

        <WeOrganize
          className
          title={[
            "We ",
            <span>organize and implement </span>,
            "educational",
            <br />,
            "programs on a turn-key basis",
          ]}
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
          data={experts}
        />

        <CheckItems data={CheckData} className />

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
                  <span>Gain new applied knowledge</span> in your or related
                  field or function
                </p>
              </div>
              <div className={s.div}></div>

              <div className={s.sure__item}>
                <p>
                  <span>Enjoy the process: </span> studying should not be a
                  burden!
                </p>
              </div>
              <div className={s.div}></div>

              <div className={s.sure__item}>
                <p>
                  <span>Get a boost</span> of motivation that will move your
                  team to success
                </p>
              </div>
              <div className={s.div}></div>

              <div className={s.sure__item}>
                <p>
                  <span>Get the maximum benefit</span> with the minimum effort
                  and cost on your part
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

export async function getServerSideProps() {
  const expRes = await axios.get(
    "https://ca-production.coursalytics.com/api/homepage/experts?limit=7"
  );
  const experts = await expRes.data.experts;
  return { props: { experts } };
}
