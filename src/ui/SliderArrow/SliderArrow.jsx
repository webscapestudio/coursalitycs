import React from "react"
import PrevArr from "./prev_arr.svg"
import NextArr from "./next_arr.svg"
import cn from "classnames"
import s from "./SliderArrow.module.scss"

export const SliderArrow = ({ prev, next, className, style, sm, ref }) => {
  if (prev) {
    return (
      <div
        className={cn(s.slider_arrow, className, s.slider_arrow_prev, {
          [s.dark]: style == "dark",
          [s.sm]: sm,
        })}
        ref={ref}
      >
        <PrevArr />
      </div>
    )
  }

  if (next) {
    return (
      <div
        className={cn(s.slider_arrow, className, s.slider_arrow_next, {
          [s.dark]: style == "dark",
          [s.sm]: sm,
        })}
        ref={ref}
      >
        <NextArr />
      </div>
    )
  }
}
