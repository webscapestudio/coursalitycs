import { Button, Title } from "../../ui"
import s from "./Database.module.scss"

export const Database = () => {
  return (
    <div className={s.wrap}>
      <div className="container-full">
        <div className={s.inner}>
          <div className="container">
            <div className={s.left}>
              <Title tag="h2">
                <span>Largest database</span> of executive-level educators and
                <span>expert</span> practitioners
              </Title>

              <Button style="accent" className={s.btn}>
                See more experts
              </Button>
            </div>

            <div className={s.right}>asd</div>
          </div>
        </div>
      </div>
    </div>
  )
}
