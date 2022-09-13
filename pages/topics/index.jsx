import axios from "axios"
import Head from "next/head"
import MainLayout from "../../src/layouts/MainLayout"
import { Title } from "../../src/ui"
import s from "./index.module.scss"

export default function TopicsPage({ topic, topicsById, topicsRes }) {
  console.log(topicsRes)
  return (
    <>
      <Head>
        <title>Coursalytics | Topics</title>
      </Head>

      <MainLayout>
        <section className={s.hero}>
          <div className="container">
            <Title tag="h1">
              Browse <span>thousands of courses</span> from hundreds of
              different universities and training organizations.
            </Title>
          </div>
        </section>

        <section className={s.topics}>
          <div className="container">
            {topicsRes.map((item) => (
              <p key={item.id}>{item.name}</p>
            ))}
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export async function getServerSideProps() {
  const res = await axios.get(
    `https://ca-production.coursalytics.com/api/subjects`
  )
  // .then((response) => {
  //   responseData = JSON.parse(response.data) //or just response idk :)
  //   let championArray = []
  //   responseData.map((champs) => {
  //     championArray.push(champs)
  //   })
  //   res.render("champions", {
  //     champs: championArray,
  //   })
  // })
  // .catch((err) => {
  //   console.log(err)
  // })
  let topicsRes = []
  // const topicsRes = JSON.parse(res.data.groups.byId)
  // console.log(res.data.groups.byId, "asd")
  // for (const key of resData) {
  //   topicsRes.push(res.data[key])
  // }
  return { props: { topicsRes } }
}
