import s from "./Socials.module.scss";

import Link from "next/link";

import FbIcon from "./Facebook.svg";
import TgIcon from "./Telegram.svg";
import TwIcon from "./Twitter.svg";

export const Socials = () => {
  return (
    <div className={s.wrap}>
      <Link href="/">
        <TwIcon />
      </Link>
      <Link href="/">
        <TgIcon />
      </Link>
      <Link href="/">
        <FbIcon />
      </Link>
    </div>
  );
};
