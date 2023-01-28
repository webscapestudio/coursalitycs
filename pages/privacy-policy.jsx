import Head from "next/head";
import { Callback } from "../src/components";
import MainLayout from "../src/layouts/MainLayout";
import { Title } from "../src/ui";
import s from "./terms.module.scss";

export default function Policy() {
  return (
    <>
      <Head>
        <title>Privacy policy</title>
        <meta
          name="description"
          content="Find and book online thousands of courses all over the world"
          key="desc"
        />
        <meta property="og:title" content="Privacy" />
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
            <Title tag="h2">
              <span>Privacy Policy</span>

              <p className={s.subtitle}>
                Protecting your private information is our priority. This Statement of Privacy applies to the
                coursalytics.com and Coursalytics Inc. and governs data collection and usage. For the purposes of this
                Privacy Policy, unless otherwise noted, all references to Coursalytics Inc. include “we”,
                coursalytics.com and Coursalytics. The Coursalytics website is an Executive education information and
                booking service site. By using the Coursalytics website, you consent to the data practices described in
                this statement.
              </p>
            </Title>

            <div className={s.info}>
              <p className={s.info__title}>Collection of your Personal Information</p>
              <p className={s.info__text}>
                Coursalytics may collect personally identifiable information, such as your name. If you purchase
                Coursalytics' products and services, we collect billing and credit card information. This information is
                used to complete the purchase transaction. We may gather additional personal or non-personal information
                in the future.
              </p>
              <p className={s.info__text}>
                Information about your computer hardware and software may be automatically collected by Coursalytics.
                This information can include: your IP address, browser type, domain names, access times and referring
                website addresses. This information is used for the operation of the service, to maintain quality of the
                service, and to provide general statistics regarding use of the Coursalytics website.
              </p>
              <p className={s.info__text}>
                Please keep in mind that if you directly disclose personally identifiable information or personally
                sensitive data through Coursalytics' public message boards, this information may be collected and used
                by others.
              </p>
              <p className={s.info__text}>
                Coursalytics encourages you to review the privacy statements of websites you choose to link to from
                Coursalytics so that you can understand how those websites collect, use and share your information.
                Coursalytics is not responsible for the privacy statements or other content on websites outside of the
                Coursalytics website.
              </p>
            </div>

            <div className={s.info}>
              <p className={s.info__title}>Use of your Personal Information</p>
              <p className={s.info__text}>
                Coursalytics collects and uses your personal information to operate its website(s) and deliver the
                services you have requested.
              </p>
              <p className={s.info__text}>
                Coursalytics may also use your personally identifiable information to inform you of other products or
                services available from Coursalytics and its affiliates. Coursalytics may also contact you via surveys
                to conduct research about your opinion of current services or of potential new services that may be
                offered.
              </p>
              <p className={s.info__text}>
                Please keep in mind that if you directly disclose personally identifiable information or personally
                sensitive data through Coursalytics' public message boards, this information may be collected and used
                by others.
              </p>
              <p className={s.info__text}>
                Coursalytics does not sell, rent or lease its customer lists to third parties.
              </p>
              <p className={s.info__text}>
                Coursalytics may, from time to time, contact you on behalf of external business partners about a
                particular offering that may be of interest to you.
              </p>
              <p className={s.info__text}>
                Coursalytics may share data with partners, whose services or products you book or purchase on
                Coursalytics, or if you expressly agree to share your personal information with them. All such third
                parties are prohibited from using your personal information except to provide these services to you, and
                they are required to maintain the confidentiality of your information.
              </p>
              <p className={s.info__text}>
                Coursalytics may keep track of the websites and pages our users visit within Coursalytics, in order to
                determine what Coursalytics services are the most popular. This data is used to deliver customized
                content and advertising within Coursalytics to customers whose behavior indicates that they are
                interested in a particular subject area.
              </p>
              <p className={s.info__text}>
                Coursalytics will disclose your personal information, without notice, only if required to do so by law
                or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or
                comply with legal process served on Coursalytics or the site; (b) protect and defend the rights or
                property of Coursalytics; and, (c) act under exigent circumstances to protect the personal safety of
                users of Coursalytics, or the public.
              </p>
            </div>

            <div className={s.info}>
              <p className={s.info__title}>Reviews</p>
              <p className={s.info__text}>
                Coursalytics may collect reviews (or feedback) on courses (open programs) from its users, customers, and
                third parties. We may publish such reviews without any identifiable personal information and/or in
                aggregate. We may publish such reviews with your name attached to it only if you provided us with an
                explicit consent to do so.
              </p>
            </div>

            <div className={s.info}>
              <p className={s.info__title}>Public Profiles</p>
              <p className={s.info__text}>
                Coursalytics creates public profiles of "experts" (sometimes referred to as "educators" or "faculty").
                We collect this information from different sources in the following ways:
              </p>
              <ul className={s.info__list}>
                <li>Address: 1751 Pinnacle Dr. Ste 600, McLean, Virginia 22102</li>
                <li>We manually research and collect publicly-available information</li>
                <li>Our users and customers contribute information about themselves and/or their affiliates</li>
              </ul>
            </div>

            <div className={s.info}>
              <p className={s.info__title}>Use of Cookies</p>
              <p className={s.info__text}>
                The Coursalytics website may use "cookies" to help you personalize your online experience. A cookie is a
                text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs
                or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web
                server in the domain that issued the cookie to you.
              </p>
              <p className={s.info__text}>
                One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose
                of a cookie is to tell the Web server that you have returned to a specific page. For example, if you
                personalize Coursalytics pages, or register with Coursalytics site or services, a cookie helps
                Coursalytics to recall your specific information on subsequent visits. This simplifies the process of
                recording your personal information, such as billing addresses, shipping addresses, and so on. When you
                return to the same Coursalytics website, the information you previously provided can be retrieved, so
                you can easily use the Coursalytics features that you customized.
              </p>
              <p className={s.info__text}>
                You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but
                you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline
                cookies, you may not be able to fully experience the interactive features of the Coursalytics services
                or websites you visit.
              </p>
            </div>

            <div className={s.info}>
              <p className={s.info__title}>Security of your Personal Information</p>
              <p className={s.info__text}>
                Coursalytics secures your personal information from unauthorized access, use or disclosure.
              </p>
            </div>

            <div className={s.info}>
              <p className={s.info__title}>Children Under Thirteen</p>
              <p className={s.info__text}>
                Coursalytics does not knowingly collect personally identifiable information from children under the age
                of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission
                to use this website.
              </p>
            </div>
            <div className={s.info}>
              <p className={s.info__title}>Information for users in Europe and Switzerland</p>
              <p className={s.info__text}>
                Purposes of processing and legal basis for processing: As explained above, we process personal data in
                various ways depending upon your use of our Sites. We process personal data on the following legal
                bases: (1) with your consent; (2) as necessary to perform our agreement to provide Services; and (3) as
                necessary for our legitimate interests in providing the Sites where those interests do not override your
                fundamental rights and freedom related to data privacy. Coursalytics’ collection and publication of
                anonymous reviews, collection of publicly-available information and the creation of public profiles are
                within Coursalytics’ legitimate interests to organize and make available information on executive
                education resources, as well as help its customers select best programs for them, given the limited
                impact of these data on an individual’s private life and that this information is widely disclosed.
              </p>
              <p className={s.info__text}>
                Individual Rights: If you are a resident of the EEA or Switzerland, you are entitled to the following
                rights once the GDPR becomes effective. Please note: In order to verify your identity, we may require
                you to provide us with personal information prior to accessing any records containing information about
                you.
              </p>
              <p className={s.info__text}>
                The right to access and correction. You have the right to request access to, and a copy of, your
                personal data at no charge, as well as certain information about our processing activities with respect
                to your data. You have the right to request correction or completion of your personal data if it is
                inaccurate or incomplete. You have the right to restrict our processing if you contest the accuracy of
                the data we hold about you, for as long as it takes to verify its accuracy. The right to request data
                erasure. You have the right to have your data erased from our Site if the data is no longer necessary
                for the purpose for which it was collected, you withdraw consent and no other legal basis for processing
                exists, or you believe your fundamental rights to data privacy and protection outweigh our legitimate
                interest in continuing the processing. The right to object to our processing. You have the right to
                object to our processing if we are processing your data based on legitimate interests or the performance
                of a task in the public interest as an exercise of official authority (including profiling); using your
                data for direct marketing (including profiling); or processing your data for purposes of scientific or
                historical research and statistics.
              </p>
            </div>

            <div className={s.info}>
              <p className={s.info__title}>Opt-Out & Unsubscribe</p>
              <p className={s.info__text}>
                We respect your privacy and give you an opportunity to opt-out of receiving announcements of certain
                information. Users may opt-out of receiving any or all communications from Coursalytics by contacting us
                by email at hello@coursalytics.com.
              </p>
            </div>

            <div className={s.info}>
              <p className={s.info__title}>Changes to this Statement</p>
              <p className={s.info__text}>
                Coursalytics will occasionally update this Statement of Privacy to reflect company and customer
                feedback. Coursalytics encourages you to periodically review this Statement to be informed of how
                Coursalytics is protecting your information.
              </p>
            </div>

            <div className={s.info}>
              <p className={s.info__title}>Contact Information</p>
              <p className={s.info__text}>
                Coursalytics welcomes your questions or comments regarding this Statement of Privacy. If you believe
                that Coursalytics has not adhered to this Statement, please contact Coursalytics at:
                hello@coursalytics.com
              </p>
              <p className={s.info__text}>Effective as of June 21, 2018</p>
            </div>
            <div className={s.info}>
              <p className={s.info__title}>Disclaimer</p>
              <p className={s.info__text}>
                All school and university names, program names, course names, brochures, logos, videos, images, and
                brands are property of their respective owners and not Coursalytics.
              </p>
              <p className={s.info__text}>
                All school and university names, program names, course names, brochures, logos, videos, images, and
                brand references used in this website are for identification and informational purposes only.
              </p>
              <p className={s.info__text}>
                Use of these school and university names, program names, course names, brochures, logos, videos, images,
                and brand references does not imply endorsement by, sponsorship by, or affiliation with the underlying
                school or university.
              </p>
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
