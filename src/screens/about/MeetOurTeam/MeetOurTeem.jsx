import cn from "classnames";
import { SliderArrow, Title } from "../../../ui";
import s from "./MeetOurTeem.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Navigation } from "swiper";

export const MeetOurTeam = ({ className, title }) => {
  const data = [
    {
      id: 1,
      name: "Ilya Breyman",
      position: "Co-founder and CEO",
      text: "Ilya is an experienced entrepreneur in the field of education with a master's degree in this field from an Ivy League University. He is the founder of the first HR Tech investment fund. Ilya has been engaged in HR consulting for more than 10 years, and has also managed consulting projects for the government, NGOs, educational organizations, etc.",
    },
    {
      id: 2,
      name: "Ilya Breyman",
      position: "Co-founder and CEO",
      text: "Ilya is an experienced entrepreneur in the field of education with a master's degree in this field from an Ivy League University. He is the founder of the first HR Tech investment fund. Ilya has been engaged in HR consulting for more than 10 years, and has also managed consulting projects for the government, NGOs, educational organizations, etc.",
    },
    {
      id: 3,
      name: "Ilya Breyman",
      position: "Co-founder and CEO",
      text: "Ilya is an experienced entrepreneur in the field of education with a master's degree in this field from an Ivy League University. He is the founder of the first HR Tech investment fund. Ilya has been engaged in HR consulting for more than 10 years, and has also managed consulting projects for the government, NGOs, educational organizations, etc.",
    },
    {
      id: 4,
      name: "Ilya Breyman",
      position: "Co-founder and CEO",
      text: "Ilya is an experienced entrepreneur in the field of education with a master's degree in this field from an Ivy League University. He is the founder of the first HR Tech investment fund. Ilya has been engaged in HR consulting for more than 10 years, and has also managed consulting projects for the government, NGOs, educational organizations, etc.",
    },
    {
      id: 5,
      name: "Ilya Breyman",
      position: "Co-founder and CEO",
      text: "Ilya is an experienced entrepreneur in the field of education with a master's degree in this field from an Ivy League University. He is the founder of the first HR Tech investment fund. Ilya has been engaged in HR consulting for more than 10 years, and has also managed consulting projects for the government, NGOs, educational organizations, etc.",
    },
  ];

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <section className={cn(s.section, className)}>
      <div className="container">
        <Title tag="h2" className={s.title}>
          Meet our <span>team</span>
        </Title>

        <div className={s.wrap}>
          <Swiper
            slidesPerView="auto"
            spaceBetween={12}
            loop={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            modules={[Navigation]}
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
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide className={s.slide} key={item.id}>
                <div className={s.card}>
                  <div className={s.card__image}>{/* <Image/> */}</div>

                  <h3 className={s.card__name}>{item.name}</h3>
                  <p className={s.card__position}>{item.position}</p>
                  <div className={s.card__hidden}>
                    <p>{item.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className={s.arrows}>
              <div className={cn(s.slider__arr, s.slider__arr_prev)} ref={navigationPrevRef}>
                <SliderArrow prev />
              </div>

              <div className={cn(s.slider__arr, s.slider__arr_next)} ref={navigationNextRef}>
                <SliderArrow next />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
