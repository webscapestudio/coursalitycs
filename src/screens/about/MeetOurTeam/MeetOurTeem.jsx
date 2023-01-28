import cn from "classnames";
import { SliderArrow, Title } from "../../../ui";
import s from "./MeetOurTeem.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Navigation } from "swiper";
import Image from "next/image";
import exp1 from "./1.jpg";
import exp2 from "./2.jpg";
import exp3 from "./3.jpg";
import exp4 from "./4.jpg";
import exp5 from "./5.jpg";
import exp6 from "./6.jpg";

export const MeetOurTeam = ({ className, title }) => {
  const data = [
    {
      id: 1,
      image: exp1,
      name: "Ilya Breyman",
      position: "Co-founder and CEO",
      text: "Ilya is an entrepreneur and HR expert with expertise in HR technology, venture capital, executive search, and executive education. He comes from a family of education entrepreneurs and holds advanced degrees from Georgetown and Penn. Despite his impressive credentials, Ilya maintains a self-ironic sense of humor and is always eager to learn and grow - except when it comes to his terrible golf game.",
      expertise: ["Entrepreneurship", "Communication", "Leadership"],
    },
    {
      id: 2,
      image: exp2,
      name: "Daria Chuprina",
      position: "Data Science Lead",
      text: "Daria is a proficient researcher and analyst skilled in R and Python. She speaks six languages and has completed numerous research projects for top global business schools. Her research interests include women's leadership, innovation and digital transformation, summer programs, and family businesses. Daria is humble, friendly, and enjoys working with others, but struggles with picking restaurants - she once took her team to a vegan sushi place.",
      expertise: ["Data Science & AI", "Decision Making", "ESG"],
    },
    {
      id: 3,
      image: exp3,
      name: "Alex Dolinskiy",
      position: "Co-founder and Head of University Relations",
      text: "Alex is a leadership development expert with a background in international relations and communications. With over 10 years of experience designing, leading, and evaluating programs, he has personally worked with hundreds of entrepreneurs and executives on their development. Alex is passionate about education technology and believes in its ability to drive positive change. Plus, he's a real whiz at choosing restaurants (unlike some people we know).",
      expertise: ["Business Model Innovation", "Negotiations", "Soft Power"],
    },
    {
      id: 4,
      image: exp4,
      name: "Angelina Prisyazhnaya",
      position: "Head of Product",
      text: "Angelina is a skilled product manager and computational linguist, with expertise in recommendation systems, search engines, and EdTech. She holds a master's degree in computational linguistics and has a successful track record in education technology and executive education. In her free time, she is a passionate animal advocate, dedicating time to rescuing homeless animals and finding them new homes. She is also a vegetarian who promotes compassion and sustainability in her personal and professional life.",
      expertise: ["Product Management", "Intrapreneurship", "Mentorship"],
    },
    {
      id: 5,
      image: exp5,
      name: "Justina Venckunaite",
      position: "Head of Business\nDevelopment, Client\nSuccess Manager",
      text: "Justina is a seasoned professional with a background in data analysis and reporting. She holds a degree in business administration and HR and has a track record of matching the right resources to the right roles. Justina is known for her enthusiasm and dedication, and is skilled at making complex data and information accessible and actionable. She has extensive international experience in both corporate and startup environments.",
      expertise: ["HR", "Data Analysis", "Business decision-making"],
    },
    {
      id: 6,
      image: exp6,
      name: "Antonina Yuzhanova",
      position: "Project Lead, Client\nSuccess Manager",
      text: "Antonina is an alumna of Warwick business school with a background in finance and consulting. She has worked for KPMG, where she gained experience in education-related consulting. Antonina is a leader of executive education programs for senior managers, executives, and entrepreneurs. She is known for identifying and furthering best practices in her programs, ensuring that clients receive high-quality, tailored education. Antonina is dedicated to creating engaging educational experiences for clients.",
      expertise: ["Women Leadership", "Family Business", "VC & PE Investment"],
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
                  <div className={s.card__image}>
                    <Image src={item.image} layout="responsive" />
                  </div>

                  <h3 className={s.card__name}>{item.name}</h3>
                  <p className={s.card__position}>{item.position}</p>
                  <div className={s.card__hidden}>
                    <p>{item.text}</p>

                    <div className={s.expertise}>
                      <h5>Expertise:</h5>
                      {item.expertise.map((exp, idx) => (
                        <p key={idx}>{exp}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={s.arrows}>
            <div
              className={cn(s.slider__arr, s.slider__arr_prev)}
              ref={navigationPrevRef}
            >
              <SliderArrow prev />
            </div>

            <div
              className={cn(s.slider__arr, s.slider__arr_next)}
              ref={navigationNextRef}
            >
              <SliderArrow next />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
