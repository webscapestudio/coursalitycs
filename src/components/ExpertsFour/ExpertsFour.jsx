import s from "./ExpertsFour.module.scss";
import { Button, SliderArrow, Title } from "../../ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { ExpertSlide } from "./ExpertSlide";
import { useRef } from "react";
import { Navigation } from "swiper";
import cn from "classnames";

export const ExpertsFour = ({ title, data }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className={s.section}>
      <div className="container">
        <Title tag="h2" className={s.title}>
          {title}
        </Title>
        <div className={s.wrap}>
          <Swiper
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              551: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1441: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            modules={[Navigation]}
          >
            {data &&
              data.map((item) => (
                <SwiperSlide key={item.id}>
                  <ExpertSlide data={item} />
                </SwiperSlide>
              ))}
          </Swiper>

          <div ref={navigationPrevRef} className={s.arr__prev}>
            <SliderArrow prev />
          </div>

          <div ref={navigationNextRef} className={s.arr__next}>
            <SliderArrow next />
          </div>

          <Button className={s.btn} link="/experts-booking">
            See more experts
          </Button>
        </div>
      </div>
    </section>
  );
};
