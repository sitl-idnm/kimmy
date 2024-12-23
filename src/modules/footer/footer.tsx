import { FC } from 'react'
import { Wrapper } from '@/ui'

import styles from './footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.root}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.wrapper__container}>
        <div className={styles.information}>
          <ul className={styles.information__list}>
            <li className={styles.information__item}><a href="" className={styles.infromation__item__link}>ВК</a></li>
          <li className={styles.inforamtion__item}><a href="" className={styles.infromation__item__link}>ТГ</a></li></ul>
          <p className={styles.information__text}>Сайт агентства интернет<br></br> маркетинга KIM.AGENCY, Москва</p>
          <a href="" className={styles.information__policy}>Политика конфиденциальности</a>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contacts__phone}>
            <a href="tel:+79152306549" className={styles.contacts__phone__link}>+7 (915) 230-65-49</a>
            <a href="tel:+74954766162" className={styles.contacts__phone__link}>+7 (495) 476 61-62</a>
          </div>
          <a href="mailto:info@kim.agency" className={styles.contacts__mail}>info@kim.agency</a>
        </div></div>
      </Wrapper>
    </footer>
  )
}

export default Footer
