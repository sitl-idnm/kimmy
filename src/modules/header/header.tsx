import { FC } from 'react'
import { Wrapper } from '@/ui'
import classNames from 'classnames'

import styles from './header.module.scss'
import { HeaderProps } from './header.types'
import Logo from './logo'
import { Button } from '@/ui/index'
import { Navigation } from '@/components'

const Header: FC<HeaderProps> = ({ className }) => {
  const headerClassName = classNames(styles.root, className)
  return (
    <header className={headerClassName}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.wrapper__container}>
          <Navigation />
          <Logo />
          <Button
          value={'Обсудить проект'}
          />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
