import cn from "classnames";
import s from "./Header.module.scss";
import Link from "next/link";
import LogoIcon from "./logo.svg";
import { HeaderLink, Input } from "../../ui";
import ExpertsIcon from "./icons/experts.svg";
import ProgramsIcon from "./icons/programs.svg";
import CustomizedIcon from "./icons/customized.svg";
import LoupeIcon from "./icons/loupe.svg";

import DigitalIcon from "../../../public/img/topics/digital.svg";
import FinanceIcon from "../../../public/img/topics/finance.svg";
import HumanIcon from "../../../public/img/topics/human.svg";
import LeadershipIcon from "../../../public/img/topics/leadership.svg";
import MarketingIcon from "../../../public/img/topics/marking.svg";
import NegotiationsIcon from "../../../public/img/topics/negotiations.svg";
import StrategyIcon from "../../../public/img/topics/strategy.svg";
import WomanIcon from "../../../public/img/topics/woman.svg";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      id: 1,
      title: "Services",
      link: "",
      sub: [
        {
          id: 1,
          link: "/experts-booking",
          title: "Experts booking",
          icon: <ExpertsIcon />,
        },
        {
          id: 2,
          link: "/executive-programs",
          title: "Executive programs",
          icon: <ProgramsIcon />,
        },
        {
          id: 3,
          link: "/customized-programs",
          title: "Customized programs",
          icon: <CustomizedIcon />,
        },
        {
          id: 4,
          link: "/research-and-analytics",
          title: "Research & Analytics",
          icon: <LoupeIcon />,
        },
      ],
    },
    {
      id: 2,
      title: "Topics",
      link: "",
      subTopics: [
        {
          id: 1,
          title: "Strategy",
          link: "/",
          icon: <StrategyIcon />,
          text: "Over 150 topics",
        },
        {
          id: 2,
          title: "Women Leadership",
          link: "/",
          icon: <WomanIcon />,
          text: "Over 150 topics",
        },
        {
          id: 3,
          title: " Leadership",
          link: "/",
          icon: <LeadershipIcon />,
          text: "Over 150 topics",
        },
        {
          id: 4,
          title: "Marketing",
          link: "/",
          icon: <MarketingIcon />,
          text: "Over 150 topics",
        },
        {
          id: 5,
          title: "Human Capital",
          link: "/",
          icon: <HumanIcon />,
          text: "Over 150 topics",
        },
        {
          id: 6,
          title: "Digital Transformation",
          link: "/",
          icon: <DigitalIcon />,
          text: "Over 150 topics",
        },
        {
          id: 7,
          title: "Finance",
          link: "/",
          icon: <FinanceIcon />,
          text: "Over 150 topics",
        },
      ],
    },
    { id: 3, title: "Courses", link: "/courses" },
    { id: 4, title: "Experts", link: "/experts-booking" },
    { id: 5, title: "About us", link: "/about" },
  ];

  const showMenu = () => {
    setIsOpen(!isOpen);
    // if (!isOpen) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "";
    // }
  };
  return (
    <header className={cn(s.header)}>
      <div className="container">
        <div className={s.wrap}>
          <Link href="/">
            <a className={s.logo}>
              <LogoIcon />
            </a>
          </Link>

          <nav
            className={cn(s.nav, {
              [s.active]: isOpen,
            })}
          >
            {links.map((item) => (
              <HeaderLink key={item.id} sub={item.sub} subTopics={item.subTopics} link={item.link}>
                {item.title}
              </HeaderLink>
            ))}
          </nav>
          <div
            className={cn(s.burger, {
              [s.active]: isOpen,
            })}
            onClick={showMenu}
          >
            <span></span>
          </div>
          {/* <div className={s.right}>
             <Input placeholder="Enter keywords" /> 
          </div> */}
        </div>
      </div>
    </header>
  );
};
