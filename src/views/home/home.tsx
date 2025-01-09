import { FC } from 'react'
import { Wrapper } from '@/ui'
import classNames from 'classnames'

import styles from './home.module.scss'
import { HomeProps } from './home.types'
import { FormFirst } from '@/modules/formFirst'
import { Favour, Introduce, Peoples, Treaty } from '@/components'
import { FormSecond } from '@/modules/formSecond'
import { Tenet } from '@/modules/tenet'
import { Conversion } from '@/modules/conversion'
import { Case } from '@/modules/case'

const Home: FC<HomeProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Wrapper>
        <Introduce />
        <Favour />
        <Case />
        <FormFirst />
        <Conversion />
        <Treaty />
        <Tenet />
        <Peoples />
        <FormSecond />
      </Wrapper>
    </main>
  )
}

export default Home
