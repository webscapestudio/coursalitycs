/* eslint-disable react/jsx-key */
import Head from "next/head";
import ReactTypingEffect from "react-typing-effect";
import {
  Callback,
  CallbackSmall,
  CheckItems,
  Examples,
  Faq,
  HowItWorks,
  PriceDepend,
  PriceDependResearch,
  Reviews,
  TextLine,
  WeOrganize,
} from "../src/components";
import MainLayout from "../src/layouts/MainLayout";
import { Title } from "../src/ui";
import s from "./research-and-analytics.module.scss";
import WeCanFirst from "../public/img/research/1.svg";
import WeCanSecond from "../public/img/research/2.svg";
import StarIcon from "../public/img/examples/star.svg";
import Reviews1 from "../public/img/reviews/1.jpg";
import Reviews2 from "../public/img/reviews/2.jpg";
import Reviews3 from "../public/img/reviews/3.jpg";
import { ExamplesResearchAndAnalytics } from "../src/screens";

export default function AboutPage() {
  const howData = [
    {
      id: 1,
      num: "01",
      title:
        "Tell us about your business or educational goals and tasks that require research or consulting",
    },
    {
      id: 2,
      num: "02",
      title:
        "We present you with a developed action plan and research design needed to achieve your goals",
    },
    {
      id: 3,
      num: "03",
      title:
        "Taking into account your feedback, we conduct analysis and regularly keep in touch with you to inform about the process",
    },
  ];

  const weOrganizeData = [
    "In-depth assessment of your goals and needs and creation of methodological plan to find answers for the stated questions",
    "Analysis using our constantly updated database that includes 10k+ courses, 40k+ faculty, and 10k+ reviews on educational programs",
    "Study of external sources, conducting interviews with world experts and consulting with independent practitioners",
    "Research on trends and the most relevant benchmarks and best practices in your industry and globally",
    "Collection and analysis of unstructured information such as audience profiles, expert statements, etc",
    "Development of financial and marketing models for educational providers and specific programs",
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

  const examplesData = [
    {
      id: 1,
      icon: StarIcon,
      title: "University Strategy Development",
      sub: [<span>Client: </span>, "Private religious university"],
      text: "Analyzed existing program portfolio and infrastructure, Identified and researched relevant best practices, designed a new flagship international program and identified potential faculty and global partners for it. ",
    },
    {
      id: 2,
      icon: StarIcon,
      title: "Learning priorities for IT companies",
      sub: [<span>Client:</span>, "Forbes 2000 IT company"],
      text: "Analyzed learning trajectories for thousands of participants from global IT companies and professional profiles for thousands of faculty to help our client design their leadership team development strategy",
    },
    {
      id: 3,
      icon: StarIcon,
      title: "Women Leadership Programs",
      sub: [<span>Client:</span>, "FT top 100 Business School"],
      text: "Analyzed open enrollment program at leading business schools (topic, formats, instructors etc.) to help our client launch a successful program of their own.",
    },
    {
      id: 4,
      icon: StarIcon,
      title: "ESG Instruction Best Practices",
      sub: [<span>Client: </span>, "FT top 100 Business School"],
      text: "Created a comprehensive map of ESG instruction based on dozens of ESG-focused degree programs and hundreds of various open enrollment programs falling into any of ESG categories to help our client re-focus their teaching strategy",
    },
    {
      id: 5,
      icon: StarIcon,
      title: "Digital Transformation Program Analysis",
      sub: [<span>Client: </span>, "FT top 10 Business School"],
      text: "Analyzed dozens of digital transformation programs (topics, formats, participants profiles etc) at leading global business schools to help our client launch a new best-selling program of their own",
    },
    {
      id: 6,
      icon: StarIcon,
      title: "Business Schools COVID 19 rapid response analysis",
      text: "Surveyed faculty and students from 50 leading business schools on strategies and technologies of pandemic instruction changes to identify best practices in teaching transition.",
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
      title: "How quickly can you conduct data-based research?",
      content:
        "It depends on the problem we need to solve and the data you want us to use. For instance, using only our database, which is the fullest that exists nowadays (10k+ courses, 50k+ professors, 10k+ reviews), the approximate time for the analysis is 3 weeks. However, if you need additional research, including interviews and other methods, the analysis may take up to 3 months.",
    },
    {
      id: 2,
      title: "In what cases do you need to conduct additional research?",
      content:
        "Usually, we have enough data to analyze short-term programs. However, if your research interest lies in the analysis of degree- or long-term programs, we may need to perform additional research.",
    },
    {
      id: 3,
      title: "How can you make precise conclusions about the program?",
      content:
        "We analyze both the way the university teaches the courses to its students and students’ feedback, which provides us with an unbiased view of the interesting program.",
    },
    {
      id: 4,
      title:
        "Is there any limitations about the industry of education you can conduct the research in?",
      content:
        "No, we are open to any ideas and research problems you may have: tell us about your goals and we will see how we can help you with them.",
    },
  ];

  return (
    <>
      <Head>
        <title>Coursalytics | Research & Consulting</title>
        <meta
          name="description"
          content="Find and book online thousands of courses all over the world"
          key="desc"
        />
        <meta property="og:title" content="Research & Consulting" />
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
            <div className={s.hero__top}>
              <Title tag="h1" className={s.hero__title}>
                Get
              </Title>
              <Title tag="h1" className={s.hero__title}>
                <ReactTypingEffect
                  speed={50}
                  typingDelay={100}
                  eraseDelay={50}
                  eraseSpeed={30}
                  className={s.typing}
                  text={[
                    "data-driven recommendations for corporate education",
                    "a strategic development plan for your educational institution",
                    "data-driven recommendations for your educational institution",
                    "a strategic development plan for corporate education",
                  ]}
                />
              </Title>
            </div>
          </div>
        </section>

        <HowItWorks
          noButton={true}
          data={howData}
          title={["How", <span> it works</span>]}
          link="https://nm3zw7qlnv7.typeform.com/to/CLfx6nnF"
        />

        <WeOrganize
          title={[
            "We conduct qualitative and quantitative",
            <br />,
            "research based on real data",
          ]}
          data={weOrganizeData}
        />

        <section className={s.wecan}>
          <div className="container">
            <Title tag="h2" className={s.wecan__title}>
              How <span>we can help</span>
            </Title>

            <div className={s.wecan__wrap}>
              <div className={s.wecan__item}>
                <h3>Corporate clients</h3>
                <WeCanFirst />
                <ul>
                  <li>Assist you in making decisions based on relevant data</li>
                  <li>
                    Give you data-driven recommendations to help you find out,
                    where and what the employees should study
                  </li>
                  <li>
                    Analyze the competency assessment model and develop
                    educational solutions that optimally match it
                  </li>
                  <li>
                    Determine the budget to be allocated for educational needs
                  </li>
                  <li>Select courses or develop customized programs</li>
                </ul>
              </div>

              <div className={s.wecan__item}>
                <h3>Education providers</h3>
                <WeCanSecond />
                <ul>
                  <li>Assist you in making decisions based on relevant data</li>
                  <li>
                    Analyze industry best practices to improve your clients' top
                    management training system
                  </li>
                  <li>
                    Analyze the strengths and weaknesses of your educational
                    programs, determine your competitive advantage
                  </li>
                  <li>
                    Identify the topics in demand to create new educational
                    programs and analyze all the information about who teaches
                    it and how
                  </li>
                  <li>
                    Determine what you need to focus on in order to compete with
                    top universities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={s.callback}>
          <div className="container">
            <Callback />
          </div>
        </section>

        <CheckItems data={CheckData} className />

        <ExamplesResearchAndAnalytics data={examplesData} />

        <section className={s.reviews__section}>
          <div className="container-xl">
            <Title tag="h2" className={s.title}>
              What prior courses <br /> participants <span>have to say</span>
            </Title>

            <Reviews data={reviewsData} />
          </div>
        </section>

        <PriceDependResearch />

        <TextLine />

        <CallbackSmall link="https://nm3zw7qlnv7.typeform.com/to/CLfx6nnF" />

        <Faq data={faqData} />
      </MainLayout>
    </>
  );
}
