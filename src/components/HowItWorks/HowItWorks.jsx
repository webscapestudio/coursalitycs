import cn from "classnames"
import { Button, Title } from "../../ui"
import s from "./HowItWorks.module.scss"

export const HowItWorks = ({ data, className, title }) => {
  return (
    <section className={cn(s.how, className)}>
      <div className="container">
        {title && (
          <Title tag="h2" className={s.title}>
            {title}
          </Title>
        )}

        <div className={s.wrap}>
          {data &&
            data.map((item) => (
              <>
                <div key={item.id} className={s.item}>
                  <div className={s.num}>{item.num}</div>
                  <p> {item.title}</p>
                </div>
                <div className={s.div}></div>
              </>
            ))}
        </div>

        <Button className={s.btn} style="accent">
          Fill out Request Form
        </Button>
      </div>
    </section>
  )
}
