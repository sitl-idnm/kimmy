import { FC } from 'react'
import classNames from 'classnames'

import styles from './casesPage.module.scss'
import { CasesPageProps } from './casesPage.types'
import { Cases } from '@/modules/cases'

const CasesPage: FC<CasesPageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Cases />
    </main>
  )
}

export default CasesPage
