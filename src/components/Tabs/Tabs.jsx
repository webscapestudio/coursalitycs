import s from "./Tabs.module.scss"
import ServiceImg from "../../../public/img/service_image.jpg"
import Image from "next/image"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import { motion } from "framer-motion"
import Link from "next/link"

export const TabsComponent = () => {
  const tabs = [
    {
      id: 1,
      title: "Experts’ booking",
      text: "For in-house executive development programs, workshops, seminars and one-on-one consultations.",
      link: "/",
      linkText: "Learn more",
    },
    {
      id: 2,
      title: "Executive programs",
      text: "For in-house executive development programs, workshops, seminars and one-on-one consultations.",
      link: "/",
      linkText: "Learn more",
    },
    {
      id: 3,
      title: "Customized programs",
      text: "For in-house executive development programs, workshops, seminars and one-on-one consultations.",
      link: "/",
      linkText: "Learn more",
    },
    {
      id: 4,
      title: "Research & Analytics",
      text: "For in-house executive development programs, workshops, seminars and one-on-one consultations.",
      link: "/",
      linkText: "Learn more",
    },
  ]

  const content = [
    { id: 1, src: ServiceImg, alt: "Alt" },
    { id: 2, src: ServiceImg, alt: "Alt" },
    { id: 3, src: ServiceImg, alt: "Alt" },
    { id: 4, src: ServiceImg, alt: "Alt" },
  ]

  const onSel = (index, lastIndex, event) => {
    console.log(index, "adasd")
  }
  return (
    <Tabs className={s.tabs}>
      <TabList className={s.btns}>
        {tabs.map((item) => (
          <Tab key={item.id} className={s.tab} onClick={onSel}>
            <h3 className={s.tab__title}>{item.title}</h3>
            <div className={s.hidden}>
              <p>{item.text}</p>
              <Link href={item.link}>
                <a className={s.link}>{item.linkText}</a>
              </Link>
            </div>
          </Tab>
        ))}
      </TabList>

      <div className={s.contents}>
        {content.map((item) => (
          <TabPanel key={item.id} className={s.content} animate={{ x: 0 }}>
            <Image src={item.src} layout="responsive" alt={item.alt} />
          </TabPanel>
        ))}
      </div>
    </Tabs>
  )
}
