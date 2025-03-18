'use client'

import { FC, useState, useEffect, useRef, useCallback } from 'react';
import { Wrapper } from '@/ui';
import classNames from 'classnames';
import gsap from 'gsap';

import styles from './header.module.scss';
import { HeaderProps } from './header.types';
import Logo from './logo';
import { Button } from '@/ui/index';
import { Navigation } from '@/components';
import { openModalContent } from '@/shared/atoms/openModal';
import { useSetAtom } from 'jotai';
import Vk from '@icons/vk.svg'
import Telegram from '@icons/telegram.svg'

const Header: FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const headerClassName = classNames(styles.root, className);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerButtonRef = useRef<HTMLDivElement>(null);
  const burgerIconRef = useRef<HTMLDivElement>(null);
  const burgerBeforeRef = useRef<HTMLDivElement>(null);
  const burgerAfterRef = useRef<HTMLDivElement>(null);
  const setModalContent = useSetAtom(openModalContent)

  const openWindows = useCallback((name: string) => {
    setModalContent(name)
  }, [setModalContent])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Инициализация при монтировании
    handleResize();

    // Добавляем слушатель изменения размера окна
    window.addEventListener('resize', handleResize);

    // Очистка при размонтировании
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.7)',
        pointerEvents: 'auto'
      });

      gsap.to(burgerBeforeRef.current, {
        top: 0,
        rotation: 45,
        duration: 0.3
      });

      gsap.to(burgerAfterRef.current, {
        top: 0,
        rotation: -45,
        duration: 0.3
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        ease: 'power2.in',
        pointerEvents: 'none'
      });

      gsap.to(burgerBeforeRef.current, {
        top: '-6px',
        rotation: 0,
        duration: 0.3
      });

      gsap.to(burgerAfterRef.current, {
        top: '6px',
        rotation: 0,
        duration: 0.3
      });
    }
  }, [isMenuOpen]);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Обработчик клика вне меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        burgerButtonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !burgerButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={headerClassName}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.wrapper__container}>
          <div className={styles.desktop__navigation}>
            <Navigation />
          </div>

          <div className={styles.logo}>
            <Logo />
          </div>


          <div className={styles.wrapper__buttons}>
            <div className={styles.information}>
              <ul className={styles.information__list}>
                <li className={styles.information__item}><a href="https://vk.com/kkimagency" target='_blank' className={styles.infromation__item__link}><Vk className={styles.vk} /></a></li>
                <li className={styles.inforamtion__item}><a href="https://t.me/kimagency" target='_blank' className={styles.infromation__item__link}><Telegram className={styles.telegram} /></a></li></ul>
            </div>
            <div className={styles.buttons__wrapper}>
              {!isMobile && (
                <Button
                  tag='button'
                  onClick={() => openWindows('детали')}
                  maxWidth='192px'
                >
                  Обсудить проект
                </Button>
              )}
              <div
                className={styles.burgerbutton}
                onClick={handleBurgerClick}
                ref={burgerButtonRef}
                data-open={isMenuOpen}
              >
                <div className={styles.burgericon} ref={burgerIconRef}>
                  <div className={styles.burgericon__before} ref={burgerBeforeRef}></div>
                  <div className={styles.burgericon__after} ref={burgerAfterRef}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={menuRef} className={styles.mobilemenu}>
          <Navigation />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
