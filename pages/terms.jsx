import Head from "next/head";
import Link from "next/link";
import { Callback } from "../src/components";
import MainLayout from "../src/layouts/MainLayout";
import { Title } from "../src/ui";
import s from "./terms.module.scss";

export default function Terms() {
  const faq = [
    {
      id: 1,
      title: "1. Accounts",
      text: "",
    },
    {
      id: 2,
      title: "2. Account Creation.",
      text: "In order to use certain features of the Site, you must register for an account (“Account”) and provide certain information about yourself as prompted by the account registration form. You represent and warrant that: (a) all required registration information you submit is truthful and accurate; (b) you will maintain the accuracy of such information. You may delete your Account at any time, for any reason, by following the instructions on the Site or requesting that your Account be deleted by email. Company may suspend or terminate your Account in accordance with Section 7.",
    },
    {
      id: 3,
      title: "3. Account Responsibilities.",
      text: "You are responsible for maintaining the confidentiality of your Account login information and are fully responsible for all activities that occur under your Account. You agree to immediately notify Company of any unauthorized use, or suspected unauthorized use of your Account or any other breach of security. Company cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.",
    },
  ];
  return (
    <>
      <Head>
        <title>Coursalytics | Faq</title>
      </Head>

      <MainLayout>
        <section className={s.hero}>
          <div className="container">
            <Title tag="h2">
              <span>Website Terms of Use</span>
            </Title>

            <div className={s.info}>
              <p className={s.info__title}>Version 2.0</p>
              <p className={s.info__text}>Last revised on: September 8, 2020</p>
              <p className={s.info__text}>
                The website located at coursalytics.com (the “Site”) is a
                copyrighted work belonging to Coursalytics Inc. (“Company”,
                “us”, “our”, and “we”). Certain features of the Site may be
                subject to additional guidelines, terms, or rules, which will be
                posted on the Site in connection with such features. All such
                additional terms, guidelines, and rules are incorporated by
                reference into these Terms.
              </p>
              <p className={s.info__text}>
                THESE TERMS OF USE (THESE “TERMS”) SET FORTH THE LEGALLY BINDING
                TERMS AND CONDITIONS THAT GOVERN YOUR USE OF THE SITE. BY
                ACCESSING OR USING THE SITE, YOU ARE ACCEPTING THESE TERMS (ON
                BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT), AND YOU
                REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND
                CAPACITY TO ENTER INTO THESE TERMS (ON BEHALF OF YOURSELF OR THE
                ENTITY THAT YOU REPRESENT). YOU MAY NOT ACCESS OR USE THE SITE
                OR ACCEPT THE TERMS IF YOU ARE NOT AT LEAST 18 YEARS OLD. IF YOU
                DO NOT AGREE WITH ALL OF THE PROVISIONS OF THESE TERMS, DO NOT
                ACCESS AND/OR USE THE SITE.
              </p>
              <p className={s.info__text}>
                THESE TERMS REQUIRE THE USE OF ARBITRATION (SECTION 8.2) ON AN
                INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR
                CLASS ACTIONS, AND ALSO LIMIT THE REMEDIES AVAILABLE TO YOU IN
                THE EVENT OF A DISPUTE.
              </p>
            </div>

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

        <section className={s.callback}>
          <div className="container">
            <Callback />
          </div>
        </section>
      </MainLayout>
    </>
  );
}
