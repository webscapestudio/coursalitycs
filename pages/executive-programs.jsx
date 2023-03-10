/* eslint-disable react/jsx-key */
import Head from "next/head";
import ReactTypingEffect from "react-typing-effect";
import {
  BuisnessSchools,
  CallbackPeoples,
  CallbackSmall,
  CardFeaturesSection,
  CoursesSlider,
  Faq,
  HelpToEnroll,
  HowItWorks,
  ProgramsSection,
  ReviewsSection,
  TextLine,
} from "../src/components";

import MainLayout from "../src/layouts/MainLayout";
import { Title } from "../src/ui";
import s from "./programs.module.scss";

import Reviews1 from "../public/img/reviews/1.jpg";
import Reviews2 from "../public/img/reviews/2.jpg";
import Reviews3 from "../public/img/reviews/3.jpg";
import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

export default function Programs({ topics }) {
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
      title: "How can you help me find the right course?",
      content:
        "It’s very simple. You just let us know what you would like to learn, and we offer you recommendations based on what we know about the lifelong learning universe. We have tens of thousands of courses that we analyzed and we have discussed thousands of executive level courses with prior course takers. Some of the world’s most prominent business schools have used our service to map the competitive landscape and design their own courses. We are always happy to connect with you for phone consultation so we get customize our learning suggestions based on your current career stage and future aspirations.",
    },
    {
      id: 2,
      title: "How do you select courses for the platform?",
      content:
        "Our goal is to put together various courses from top providers that could help current and prospective leaders in advancing their professional knowledge and skills. Those include all offerings by major executive education providers as well as various other relevant learning opportunities. We constantly expand our inventory to make sure it matches learning needs of our clients worldwide.",
    },
    {
      id: 3,
      title: "How much do executive level courses typically cost?",
      content:
        "Executive education is usually rather expensive, and some non-degree courses can exceed USD 80K, but there are also other shorter or online versions of courses that are within several hundred USD. There is always an opportunity to find something within your budget.",
    },
    {
      id: 4,
      title: "What if I need to cancel the course?",
      content:
        "Things do happen and people need to cancel and reschedule their course participation all the time. At Coursalytics.com we try our best to help customers adjust their learning journeys. However, we do have to follow education providers’ terms. When you book a course at Coursaltytics.com that means you agree with the terms and conditions of the education provider offering it. We will try our best to negotiate a solution (100% success so far), but it’s the same as returning non-refundable airline tickets: miracles do happen, but don’t trust anyone who promises them.",
    },
    {
      id: 5,
      title: "What is the best way to choose courses?",
      content: [
        "Lifelong learning is a process. Depending on your career stage, professional development goals as well as travel and finance opportunities, multiple options can be a good fit. Selecting the right course requires taking several steps:",
        <br />,
        "- identifying your development goals,",
        <br />,
        "- identifying learning options that could help address them,",
        <br />,
        "- selecting a course that best fits your learning needs at your specific career stage.",
      ],
    },
  ];

  const [isModalOpen, setisModalOpen] = useState(false);
  const context = createContext();
  console.log(context);

  return (
    <>
      <Head>
        <title>Coursalytics | Programs</title>
        <meta
          name="description"
          content="Find and book online thousands of courses all over the world"
          key="desc"
        />
        <meta property="og:title" content="Executive Programs" />
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
            <Title tag="h1" className={s.hero__title}>
              Selection and booking of executive programs offered by <br />{" "}
              <ReactTypingEffect
                speed={50}
                typingDelay={100}
                eraseDelay={100}
                eraseSpeed={30}
                className={s.typing}
                text={[
                  "top business schools",
                  "non-university providers",
                  "schools of public administration",
                  "law schools",
                ]}
              />
              <br />
              all over the world
            </Title>
          </div>
        </section>
        <HowItWorks data={howData} title={["How", <span> it works</span>]} />
        <HelpToEnroll />
        <CoursesSlider data={topics.courses} />
        <CardFeaturesSection />
        <section className={s.callback}>
          <div className="container">
            <CallbackPeoples />
          </div>
        </section>
        <ProgramsSection />
        <BuisnessSchools />
        <ReviewsSection data={reviewsData} />
        <TextLine />
        <CallbackSmall link="https://nm3zw7qlnv7.typeform.com/to/AF45cz8B" />
        <Faq data={faqData} />
      </MainLayout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    `https://ca-production.coursalytics.com/api/homepage/popular_courses`
  );
  const topics = await res.data;
  return { props: { topics } };
}
