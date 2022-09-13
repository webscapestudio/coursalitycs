import s from "./Footer.module.scss"
import { Button, Input } from "../../ui/index"
import Link from "next/link"
import { Socials } from "../Socials/Socials"

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.top}>
          <nav>
            <div className={s.footer__item}>
              <h4>Coursalytics</h4>
              <ul>
                <li>
                  <Link href="/terms">Terms of Use</Link>
                </li>

                <li>
                  <Link href="https://coursalytics.com/publications/privacy-policy">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div className={s.footer__item}>
              <h4>Services</h4>
              <ul>
                <li>
                  <Link href="/experts">Experts’ booking</Link>
                </li>

                <li>
                  <Link href="/programs">Executive programs</Link>
                </li>

                <li>
                  <Link href="/programs">Customized programs</Link>
                </li>

                <li>
                  <Link href="/analytics">Research & Analytics</Link>
                </li>
              </ul>
            </div>

            <div className={s.footer__item}>
              <h4>More info</h4>
              <ul>
                <li>
                  <Link href="https://coursalytics.com/blog/">Blog</Link>
                </li>

                <li>
                  <Link href="/about">About Us</Link>
                </li>

                <li>
                  <Link href="/faq">FAQ</Link>
                </li>

                <li>
                  <a href="mailto:hello@coursalytics.com">
                    Contact Us By Email
                  </a>
                </li>
              </ul>
            </div>

            <div className={s.footer__item}>
              <h4>Subscribe for updates</h4>

              <div className={s.footer__item_info}>
                <Input style="white" placeholder="Email" />
                <Button size="md" className={s.footer__btn} style="accent">
                  Submit
                </Button>
              </div>
            </div>
          </nav>
        </div>

        <div className={s.bottom}>
          <div className={s.bottom__text}>
            <p>
              All school and university names, program names, course names,
              brochures, logos, videos, images, and brands are property of their
              respective owners and not Coursalytics. All school and university
              names, program names, course names, brochures, logos, videos,
              images, and brand references used in this website are for
              identification and informational purposes only. Use of these
              school and university names, program names, course names,
              brochures, logos, videos, images, and brand references does not
              imply endorsement by, sponsorship by, or affiliation with the
              underlying school or university.
            </p>

            <ul>
              <li>Photos: Unsplash</li>
              <li>Logos provided by Clearbit</li>
              <li>Find jobs at Jooble</li>
            </ul>

            <p>
              This product includes GeoLite2 data created by MaxMind, available
              from maxmind.com
            </p>
          </div>

          <div className={s.socials}>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  )
}
