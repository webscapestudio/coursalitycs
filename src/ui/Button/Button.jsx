import cn from "classnames";
import Link from "next/link";
import s from "./Button.module.scss";

export const Button = ({ link, type, size, style, rounded, className, children }) => {
  if (link) {
    return (
      <Link href={link}>
        <a
          target="_blank"
          className={cn(s.button, className, {
            [s.accent]: style === "accent",
            [s.red]: style === "red",
            [s.sm]: size === "sm",
            [s.md]: size === "md",
          })}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={cn(s.button, className, {
        [s.accent]: style == "accent",
        [s.red]: style === "red",
        [s.md]: size === "md",
        [s.sm]: size == "sm",
      })}
    >
      {children}
    </button>
  );
};
