import { FC } from 'react'
import classNames from 'classnames'

import styles from './sweetCorpPage.module.scss'
import { SweetCorpPageProps } from './sweetCorpPage.types'
import { IntroCase } from '@/modules/introCase'
import { ContentCase } from '@/modules/contentCase'

const SweetCorpPage: FC<SweetCorpPageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <IntroCase
        backgroundImage={'/images/cases/sweetcorp/SweetCorpCaseBackground.png'}
        title={'Сайт с конверсией 4,3%'}
        text={<>для производителя сладких<br />новогодних подарков</>}
        buttonLink={''}
        description={'Разработали сайт с отдельными страницами для B2B и B2C сегментов'}
        tilda={false}
        webflow={true}
      />
      <ContentCase />
    </main>
  )
}

export default SweetCorpPage
