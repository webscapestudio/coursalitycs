import s from "./Socials.module.scss";

import Link from "next/link";

import FbIcon from "./Facebook.svg";
import LiIcon from "./in.svg";
import IgIcon from "./ig.svg";

export const Socials = () => {
  return (
    <div className={s.wrap}>
      <Link href="https://instagram.com/coursalytics">
        <a target="_blank">
          <IgIcon />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/company/coursalytics">
        <a target="_blank">
          <LiIcon />
        </a>
      </Link>
      <Link href="https://facebook.com/coursalytics/">
        <a target="_blank">
          <FbIcon />
        </a>
      </Link>
    </div>
  );
};
