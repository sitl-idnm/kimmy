import { FC } from 'react'
import classNames from 'classnames'

import styles from './casesPage.module.scss'
import { CasesPageProps } from './casesPage.types'
import { Cases } from '@/modules/cases'
import NewModalContainer from '@/components/newModalContainer/newModalContainer'
import { CookieBanner } from '@/modules/cookieBanner'

const CasesPage: FC<CasesPageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <NewModalContainer />
      <Cases />
      <CookieBanner />
    </main>
  )
}

export default CasesPage
