import Head from "next/head"
import { Catalog, Filter, HowItWorks } from "../../src/components"
import MainLayout from "../../src/layouts/MainLayout"
import { Title } from "../../src/ui"
import s from "./index.module.scss"

export default function CoursesPage() {
  const howData = [
    {
      id: 1,
      num: "250",
      title: "Courses in our database",
    },
    {
      id: 2,
      num: "45",
      title: "Business schools and other providers",
    },
    {
      id: 3,
      num: "1000",
      title: "Columns",
    },
    {
      id: 4,
      num: "25",
      title: "languages",
    },
  ]

  return (
    <>
      <Head>
        <title>Coursalytics | Courses</title>
      </Head>

      <MainLayout>
        <section className={s.hero}>
          <div className="container">
            <Title tag="h1" className={s.hero__title}>
              Choose from <span>thousands of courses</span> from leading
              educators and institutions at <span>your fingertips</span>
            </Title>
          </div>
        </section>

        <HowItWorks data={howData} />

        <section className={s.catalog__section}>
          <div className="container">
            <Title tag="h3">
              Search <span>courses</span>
            </Title>

            <div className={s.top}></div>

            <div className={s.catalog}>
              <Filter className={s.filter} />
              <Catalog className={s.catalog} />
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}
