import { FC } from 'react'
import { Wrapper } from '@/ui'
import classNames from 'classnames'

import styles from './home.module.scss'
import { HomeProps } from './home.types'
// import { FormFirst } from '@/modules/formFirst'
// import { Favour, Introduce, Treaty } from '@/components'
import { FormSecond } from '@/modules/formSecond'
// import { Tenet } from '@/modules/tenet'
import { Conversion } from '@/modules/conversion'

const Home: FC<HomeProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Wrapper>
        {/* <Introduce />
        <Favour />
        <FormFirst /> */}
        <Conversion />
        {/* <Treaty />
        <Tenet /> */}
        {/* <Peoples /> */}
        <FormSecond />
      </Wrapper>
    </main>
  )
}

export default Home
