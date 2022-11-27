import axios from "axios";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import { EffectCoverflow, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, SliderArrow, Title } from "../../ui";
import { IndexCard } from "../IndexCard/IndexCard";
import s from "./CoursesSlider.module.scss";

export const CoursesSlider = ({data}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className={s.section}>
      <div className="container">
        <Title tag="h2">
          Thousands of <span>courses</span> from leading educators and <br /> institutions at your fingertips
        </Title>
        {data.map((item) => {
          <p>{item.name}</p>;
        })}

        <Swiper
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              // Override prevEl & nextEl now that refs are defined
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              // Re-init navigation
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={"auto"}
          className={s.slider}
          loop={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 588,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation]}
          breakpoints={{
            320: {
              effect: 0,
              spaceBetween: 20,
              slidesPerView: "auto",
            },

            1025: {
              effect: "coverflow",
              coverflowEffect: {
                rotate: 0,
                stretch: 50,
                depth: 588,
                modifier: 1,
                slideShadows: false,
              },
            },
          }}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <IndexCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={cn(s.index__slider_arr, s.index__slider_arr_prev)} ref={navigationPrevRef}>
          <SliderArrow prev />
        </div>

        <div className={cn(s.index__slider_arr, s.index__slider_arr_next)} ref={navigationNextRef}>
          <SliderArrow next />
        </div>

        <Button link="/courses" style="accent" className={s.btn}>
          See All Courses
        </Button>
      </div>
    </section>
  );
};
