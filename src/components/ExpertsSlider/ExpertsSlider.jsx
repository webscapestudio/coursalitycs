import { Swiper, SwiperSlide } from "swiper/react";
import { Button, SliderArrow, Title } from "../../ui";
import { IndexExpert } from "../IndexExpert/IndexExpert";
import s from "./ExpertsSlider.module.scss";
import ExpertImage from "../../../public/img/expert.jpg";
import { Navigation } from "swiper";
import { useRef } from "react";
import cn from "classnames";

export const ExpertsSlider = ({ data }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <section className={s.expert__section}>
      <div className="container-full">
        <Title tag="h2" className={s.expert__section_title}>
          Largest database of executive-level <br />
          <span> educators and expert </span>
          practitioners
        </Title>

        <Swiper
          spaceBetween={15}
          centeredSlides={true}
          className={s.expert__slider}
          loop={true}
          slidesPerView="auto"
          modules={[Navigation]}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            1025: {
              // slidesPerView: "auto",
              // loop: true,
            },
          }}
          navigation={{
            prevEl: navigationNextRef.current,
            nextEl: navigationNextRef.current,
          }}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <IndexExpert data={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={s.arrows}>
          <div className={cn(s.arr__prev)} ref={navigationPrevRef}>
            <SliderArrow prev xs style="dark" />
          </div>

          <div className={cn(s.arr__next)} ref={navigationNextRef}>
            <SliderArrow next xs style="dark" />
          </div>
        </div>

        <Button className={s.btn} link="/experts">
          See All Experts
        </Button>
      </div>
    </section>
  );
};
