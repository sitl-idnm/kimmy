'use client'

import { FC, useState, useRef } from 'react';
import { Wrapper } from '@/ui';
import classNames from 'classnames';
import gsap from 'gsap';

import styles from './header.module.scss';
import { HeaderProps } from './header.types';
import Logo from './logo';
import { Button } from '@/ui/index';
import { Navigation } from '@/components';
import { useGSAP } from '@gsap/react';

const Header: FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerClassName = classNames(styles.root, className);
  const menuRef = useRef(null);
  const burgerButtonRef = useRef(null);

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    } else {
      gsap.to(menuRef.current, {
        x: '-100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
      });
    }
  }, [isMenuOpen]);

  useGSAP(() => {
    if (isMenuOpen) {
      // Отключаем скролл
      document.body.style.overflow = 'hidden';
    } else {
      // Включаем скролл
      document.body.style.overflow = '';
    }

    // Очистка при размонтировании компонента
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
    gsap.fromTo(
      burgerButtonRef.current,
      { rotation: 0 },
      { rotation: 90, duration: 0.5, ease: 'power2.inOut' }
    );
  };

  return (
    <header className={headerClassName}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.wrapper__container}>

          {/* Navigation будет видим на больших экранах */}
          <div className={styles.desktop__navigation}>
            <Navigation />
          </div>

          {/* Логотип и кнопка для десктопа */}
          <Logo />

          <div className={styles.desktop__navigation}>
            <Button value={'Обсудить проект'} />
          </div>

          {/* Бургер-кнопка для открытия/закрытия меню на мобильных устройствах */}
          <div
            className={styles.burgerbutton}
            onClick={handleBurgerClick}
            ref={burgerButtonRef}
          >
            <div className={styles.burgericon}></div>
          </div>
        </div>

        {/* Мобильное меню */}
        <div ref={menuRef} className={styles.mobilemenu} style={{ display: isMenuOpen ? 'block' : 'none' }}>
          <Navigation />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
