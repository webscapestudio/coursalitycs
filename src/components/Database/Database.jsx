import { Button, Title } from "../../ui"
import Image from "next/image"
import s from "./Database.module.scss"
import cn from 'classnames'
import RobImg from '../../../public/img/databse/1.jpg'
import AntImg from '../../../public/img/databse/2.jpg'
import KonImg from '../../../public/img/databse/3.jpg'


export const Database = () => {
  return (
    <div className={s.wrap}>
      <div className="container-xl">
        <div className={s.inner}>
          <div className="container">
            <div className={s.left}>
              <Title tag="h2" className={s.title}>
                <span>Largest database</span> of executive-level educators and
                <span>expert</span> practitioners
              </Title>

              <Button style="accent" className={s.btn}>
                See more experts
              </Button>
            </div>

            <div className={s.right}>
              <div className={s.item}></div>
              <div className={s.item}></div>
              <div className={s.item}></div>
              <div className={cn(s.item, s.item__card)}>
                <div className={s.img}>
                  <Image src={RobImg} layout="responsive" alt="Robin" />
                </div>
                <h3>Robin Speculand</h3>
                <p>Adjunct faculty member at <br /> National University of Singapore</p>
              </div>

              <div className={cn(s.item, s.item__card)}>
                <div className={s.img}>
                  <Image src={AntImg} layout="responsive" alt="Robin" />
                </div>
                <h3>Antonio Nieto Rodriguez</h3>
                <p>Independent Project <br /> Management Expert at Vlerick <br /> Business School</p>
              </div>


              <div className={s.item}></div>
              <div className={s.item}></div>

              <div className={cn(s.item, s.item__card)}>
                <div className={s.img}>
                  <Image src={KonImg} layout="responsive" alt="Robin" />
                </div>
                <h3>Konstantin Korotov</h3>
                <p>Associate Professor of <br /> Organizational Behavior at <br /> ESMT Berlin</p>
              </div>

              <div className={s.item}></div>
              <div className={s.item}></div>
              <div className={s.item}></div>
              <div className={s.item}></div>
              <div className={s.item}></div>
              <div className={s.item}></div>
              <div className={s.item}></div>
            </div>

            <Button style="accent" className={s.btn__mob}>
              See more experts
            </Button>

          </div>
        </div>
      </div>
    </div>
  )
}
