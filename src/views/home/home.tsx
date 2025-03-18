'use client'
import { FC, useCallback, useRef } from 'react'
import { Wrapper } from '@/ui'
import classNames from 'classnames'

import styles from './home.module.scss'
import { HomeProps } from './home.types'
import { FormFirst } from '@/modules/formFirst'
import { Favour, Introduce, Peoples, SocialSharing, Treaty } from '@/components'
import { FormSecond } from '@/modules/formSecond'
import { Tenet } from '@/modules/tenet'
import { Conversion } from '@/modules/conversion'
import { Case } from '@/modules/case'
// import { DrawerMenu } from '@/modules/drawerMenu'
import NewModalContainer from '../../components/newModalContainer/newModalContainer'
import { useNavigationHandler } from '@/shared/hooks/useNavigationHandler'

const Home: FC<HomeProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)
  const mainRef = useRef<HTMLElement>(null);

  const resetAnimations = useCallback(() => {
    if (mainRef.current) {
      mainRef.current.style.animation = 'none';
      mainRef.current.offsetHeight; // Trigger reflow
      mainRef.current.style.animation = '';
    }
  }, []);

  useNavigationHandler(resetAnimations);

  return (
    <main ref={mainRef} className={rootClassName}>
      <NewModalContainer />
      <Wrapper>
        <Introduce />
        <Favour />
        <SocialSharing />
        <Case />
        <FormFirst />
        <Conversion />
        <Treaty />
        <Tenet />
        <Peoples />
        <FormSecond />
      </Wrapper>
      {/* <DrawerMenu /> */}
    </main>
  )
}

export default Home
