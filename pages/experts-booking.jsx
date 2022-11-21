import cn from "classnames";
import Head from "next/head";
import Image from "next/image";
import MainLayout from "../src/layouts/MainLayout";
import { Title } from "../src/ui";
import s from "./experts.module.scss";
import RocketGirl from "../public/img/rocketgirl.png";
import HeroLine from "../public/img/heroline.svg";
import HeroLineMob from "../public/img/heroline_mob.svg";
import {
  Callback,
  CallbackGirl,
  CallbackSmall,
  Combination,
  Database,
  Examples,
  Faq,
  HowItWorks,
  PriceDepend,
  Reviews,
  TabsExpertsBooking,
  TextLine,
} from "../src/components";
import ArrowIcon from "../public/img/examples/arrow.svg";
import DataIcon from "../public/img/examples/data.svg";
import ListIcon from "../public/img/examples/list.svg";
import PenIcon from "../public/img/examples/pen.svg";
import UsersIcon from "../public/img/examples/users.svg";
import Reviews1 from "../public/img/reviews/1.jpg";
import Reviews2 from "../public/img/reviews/2.jpg";
import Reviews3 from "../public/img/reviews/3.jpg";

export default function Experts() {
  const howData = [
    {
      id: 1,
      num: "01",
      title: "Tell us about your learning objectives and expectations ",
    },
    {
      id: 2,
      num: "02",
      title: "Choose an expert you like best from the options we offer",
    },
    {
      id: 3,
      num: "03",
      title: "Meet the expert personally and make the final decision",
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
        <title>Coursalytics | Experts</title>
      </Head>

      <MainLayout>
        <section className={s.hero}>
          <div className="container">
            <Title tag="h1" className={s.hero__title}>
              Find a <span>perfect expert</span> to help you and your team <span>understand</span> new trends,{" "}
              <span>learn</span> best practices and <span>improve</span> decision making and execution
            </Title>
          </div>
          <div className={s.hero__fx}>
            <div className={s.hero__girl}>
              <Image src={RocketGirl} alt="coursalytics" layout="responsive" />
            </div>

            <HeroLine className={s.heroline} />
            <HeroLineMob className={s.heroline__mob} />
          </div>
        </section>

        <HowItWorks
          data={howData}
          // eslint-disable-next-line react/jsx-key
          title={["How it", " ", <span>works</span>]}
        />

        <Combination />

        <Database />

        <section className={s.tabs}>
          <div className="container">
            <div className={s.tabs__wrap}>
              <TabsExpertsBooking />
            </div>
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

        <section className={s.callback}>
          <div className="container">
            <CallbackGirl />
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

        <CallbackSmall link="https://nm3zw7qlnv7.typeform.com/to/mrD65LWo" />

        <Faq data={faqData} />
      </MainLayout>
    </>
  );
}
