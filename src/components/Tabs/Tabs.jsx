import s from "./Tabs.module.scss";
import ServiceImg from "../../../public/img/service_image.jpg";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";
import Link from "next/link";

export const TabsExpertsBooking = () => {
  const tabs = [
    {
      id: 1,
      title: "Choose from an extensive database of experts",
      text: "Among tens of thousands of practitioners whose professional experience and leadership potential we track and analyze, our team always finds a person exactly for your request and task.",
      link: "/",
      src: ServiceImg,
      linkText: "Learn more",
    },
    {
      id: 2,
      title: "Get to know the expert personally",
      text: "We appreciate the trusting relationship between you and the expert. That's why we are not only looking for a candidate, but also provide you with all the necessary contacts and introduce you to them personally.",
      link: "/",
      linkText: "Learn more",
    },
    {
      id: 3,
      title: "Stay informed throughout the process",
      text: "Our team keeps in touch with you throughout the entire process. Written communication or online meetings – we are always ready to answer your questions.",
      link: "/",
      linkText: "Learn more",
    },
    {
      id: 4,
      title: "Pay only for what your team needs",
      text: "We ensure the quality at the level of the leading executive education players for half the cost: you only pay for the experts’ time.",
      link: "/",
      linkText: "Learn more",
    },
  ];

  const content = [
    { id: 1, src: ServiceImg, alt: "Alt" },
    { id: 2, src: ServiceImg, alt: "Alt" },
    { id: 3, src: ServiceImg, alt: "Alt" },
    { id: 4, src: ServiceImg, alt: "Alt" },
  ];

  const onSel = (index, lastIndex, event) => {
    console.log(index, "adasd");
  };
  return (
    <Tabs className={s.tabs}>
      <TabList className={s.btns}>
        {tabs.map((item) => (
          <Tab key={item.id} className={s.tab} onClick={onSel}>
            <h3 className={s.tab__title}>{item.title}</h3>
            <div className={s.hidden}>
              <p>{item.text}</p>
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
  );
};
