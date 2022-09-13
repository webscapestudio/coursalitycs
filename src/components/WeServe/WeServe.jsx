import { Title } from "../../ui"
import s from "./WeServe.module.scss"
import Img1 from "./1.jpg"
import Img2 from "./2.jpg"
import Img3 from "./3.jpg"
import Image from "next/image"

export const WeServe = () => {
  const data = [
    {
      id: 1,
      image: Img1,
      title: "Corporations and government agencies",
      list: [
        "Fast access to expertise: get leading experts to work with    your senior team",
        "Cost minimization: pay only for what your team needs",
        "Tailored expert selection",
        "Individual learning trajectories for senior team members",
        "Assistance on interaction with universities, business schools and other education providers",
      ],
    },
    {
      id: 2,
      image: Img2,
      title: "University-based and non-university-based providers",
      list: [
        "Fill you unsold seats in open-enrollment programs with customers from new markets, as well as C-level participants.",
        "We will help launch new programs taking into account the analytics of the competitors best practices; compare the structure and content of existing programs; and collect the best insights from participants.",
        "We will help you find and hire experts for your programs.",
      ],
    },
    {
      id: 3,
      image: Img3,
      title: "Individuals",
      list: [
        "Get individual advice about life-long learning based on your educational and professional experience, linguistic and/or cultural preferences",
        "Educational concierge service: search and selection of educational programs, organization of admission, assistance in travel and accommodation, personal consultations.",
        "Individual search for coaches/mentors",
      ],
    },
  ]

  return (
    <section className={s.section}>
      <div className="container">
        <Title tag="h2" className={s.title}>
          We serve as a <span>one-stop-shop</span> for
        </Title>
        <div className={s.wrap}>
          {data.map((item) => (
            <div key={item.id} className={s.item}>
              <div className={s.item__image}>
                <Image src={item.image} alt={item.title} layout="responsive" />
              </div>

              <div className={s.item__info}>
                <h3>{item.title}</h3>
                <ul>
                  {item.list.map((i, index) => (
                    <li key={index}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
