import cn from "classnames"
import { useRef } from "react"
import { EffectCoverflow, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Button, SliderArrow, Title } from "../../ui"
import { IndexCard } from "../IndexCard/IndexCard"
import s from "./CoursesSlider.module.scss"

export const CoursesSlider = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const infoCards = [
    {
      id: 1,
      title: "Advanced Human Resource Executive Program",
      address: "Stephen M. Ross School of Business",
      map: "Ann Arbor, Michigan, United States",
      date: "Jul 11—22, 2022",
    },
    {
      id: 2,
      title:
        "The Positive Leader: Deep Change and Organizational Transformation",
      address: "Stephen M. Ross School of Business",
      map: "Ann Arbor, Michigan, United States",
      date: "Jun 19—24, 2022",
    },
    {
      id: 3,
      title: "The Manchester Leadership Development Programme",
      address: "Alliance Manchester Business School",
      map: "Manchester, United Kingdom",
      date: "Jul 4—8, 2022",
    },
    {
      id: 4,
      title: "Strategic Human Resource Leadership",
      address: "Rotman School of Management",
      map: "Toronto, Ontario, Canada",
      date: "May 2—6, 2022",
    },
    {
      id: 5,
      title: "Leading Strategic Growth and Change",
      address: "Columbia Business School",
      map: "New York, United States",
      date: "Jul 11—22, 2022",
    },
  ]

  return (
    <section className={s.section}>
      <div className="container">
        <Title tag="h2">
          Thousands of <span>courses</span> from leading educators and <br />{" "}
          institutions at your fingertips
        </Title>

        <Swiper
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              // Override prevEl & nextEl now that refs are defined
              swiper.params.navigation.prevEl = navigationPrevRef.current
              swiper.params.navigation.nextEl = navigationNextRef.current

              // Re-init navigation
              swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()
            })
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
          {infoCards.map((item) => (
            <SwiperSlide key={item.id}>
              <IndexCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={cn(s.index__slider_arr, s.index__slider_arr_prev)}
          ref={navigationPrevRef}
        >
          <SliderArrow prev />
        </div>

        <div
          className={cn(s.index__slider_arr, s.index__slider_arr_next)}
          ref={navigationNextRef}
        >
          <SliderArrow next />
        </div>

        <Button link="/courses" style="accent" className={s.btn}>
          See All Courses
        </Button>
      </div>
    </section>
  )
}
