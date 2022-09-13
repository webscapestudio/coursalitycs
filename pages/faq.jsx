import Head from "next/head"
import Link from "next/link"
import { Callback } from "../src/components"
import MainLayout from "../src/layouts/MainLayout"
import { Title } from "../src/ui"
import s from "./faq.module.scss"

export default function Faq() {
  const faq = [
    {
      id: 1,
      title: "What is this website?",
      text: "Coursalytics.com is a global marketplace for executive-level short open enrollment courses. We see our goal in helping managers and entrepreneurs to select the best learning options to advance their professional development.",
    },
    {
      id: 2,
      title: "How do I book a course here?",
      text: "Same as with most online booking services. After you choose a course that fits you, you fill out the registration form on Coursalytics.com, pay for it, get a confirmation, and that’s it. One-stop-shop for executive education needs. With some schools and some courses, extra steps may be required such as completing a survey or even submitting recommendation letters. Our team of experts would be happy to guide you through this process and assist you with every step. We also liaise with education providers to ensure our customers get the best learning experience and sometimes we are able to get them in even if all the seats are filled.",
    },
    {
      id: 3,
      title: "How can you help me find the right course?",
      text: "It’s very simple. You just let us know what you would like to learn, and we offer you recommendations based on what we know about the lifelong learning universe. We have tens of thousands of courses that we analyzed and we have discussed thousands of executive level courses with prior course takers. Some of the world’s most prominent business schools have used our service to map the competitive landscape and design their own courses. We are always happy to connect with you for phone consultation so we get customize our learning suggestions based on your current career stage and future aspirations.",
    },
    {
      id: 4,
      title: "How do you select courses for the platform?",
      text: "Our goal is to put together various courses from top providers that could help current and prospective leaders in advancing their professional knowledge and skills. Those include all offerings by major executive education providers as well as various other relevant learning opportunities. We constantly expand our inventory to make sure it matches learning needs of our clients worldwide.",
    },
    {
      id: 5,
      title: "How much do executive level courses typically cost?",
      text: "Executive education is usually rather expensive, and some non-degree courses can exceed USD 80K, but there are also other shorter or online versions of courses that are within several hundred USD. There is always an opportunity to find something within your budget.",
    },
    {
      id: 6,
      title: "What if I need to cancel the course?",
      text: "Executive education is usually rather expensive, and some non-degree courses can exceed USD 80K, but there are also other shorter or online versions of courses that are within several hundred USD. There is always an opportunity to find something within your budget.",
    },
  ]
  return (
    <>
      <Head>
        <title>Coursalytics | Faq</title>
      </Head>

      <MainLayout>
        <section className={s.hero}>
          <div className="container">
            <Title tag="h2">
              <span>Frequently Asked Questions</span>
            </Title>

            <div className={s.wrap}>
              {faq &&
                faq.map((item) => (
                  <div key={item.id} className={s.item}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className={s.more}>
          <div className="container">
            <Title tag="h3">More about us</Title>
            <div className={s.more__wrap}>
              <nav>
                <Link href="https://coursalytics.com/publications/what-we-offer-university-based-and-non-university-based-providers">
                  <a className={s.more__link}>
                    What we offer university-based and non-university-based
                    providers
                  </a>
                </Link>
                <Link href="https://coursalytics.com/publications/what-we-offer-individuals">
                  <a className={s.more__link}>What we offer individuals</a>
                </Link>
                <Link href="https://coursalytics.com/publications/what-we-offer-corporations-and-government-agencies">
                  <a className={s.more__link}>
                    What we offer corporations and government agencies
                  </a>
                </Link>
                <Link href="https://coursalytics.com/publications/what-we-offer-executive-coaches-and-leadership-development-consultants">
                  <a className={s.more__link}>
                    What we offer Executive Coaches and Leadership Development
                    Consultants
                  </a>
                </Link>
                <Link href="/about">
                  <a className={s.more__link}>About us</a>
                </Link>
              </nav>
            </div>
          </div>
        </section>

        <section className={s.callback}>
          <div className="container">
            <Callback />
          </div>
        </section>
      </MainLayout>
    </>
  )
}
