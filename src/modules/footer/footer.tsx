import { FC } from 'react'
import { Wrapper } from '@/ui'

import styles from './footer.module.scss'
import Vk from '@icons/vk.svg'
import Telegram from '@icons/telegram.svg'
import Link from 'next/link'
import Palace from '@icons/palace.svg'

const Footer: FC = () => {
  return (
    <footer className={styles.root}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.wrapper__container}>
          <div className={styles.information}>
            <ul className={styles.information__list}>
              <li className={styles.information__item}><a href="https://vk.com/kkimagency" target='_blank' className={styles.infromation__item__link}><Vk className={styles.vk} /></a></li>
              <li className={styles.inforamtion__item}><a href="https://t.me/kimagency" target='_blank' className={styles.infromation__item__link}><Telegram className={styles.telegram} /></a></li></ul>
            <p className={styles.information__text}>Сайт агентства интернет -<br></br> маркетинга K.KIM, Москва</p>
            <Link href="/privacy-policy" target='_blank' className={styles.information__policy}>Политика конфиденциальности</Link>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contacts__phone}>
              <a href="tel:+79152306549" className={styles.contacts__phone__link}>+7 (915) 230-65-49</a>
              <a href="tel:+74954766162" className={styles.contacts__phone__link}>+7 (495) 476 61-62</a>
            </div>
            <a href="mailto:info@kim.agency" className={styles.contacts__mail}>info@kim.agency</a>
          </div></div>
        <div className={styles.palace}>
          <p className={styles.palace__text}>Мы являемся членами Московской торгово-промышленной палаты</p>
          <Palace />
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
