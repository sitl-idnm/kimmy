'use client';

import { FC, useRef, useEffect } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import styles from './treaty.module.scss';
import { TreatyProps } from './treaty.types';
import { Borders, Button } from '@/ui';

gsap.registerPlugin(ScrollTrigger);

const Treaty: FC<TreatyProps> = ({ className, cornersWithCrosses = [] }) => {
  const rootClassName = classNames(styles.root, className);

  const topCardRef = useRef<HTMLDivElement>(null);
  const bottomCardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current, // Устанавливаем триггер на контейнер
        start: 'center center', // Начинаем анимацию, когда верхняя часть контейнера достигает центра экрана
        end: '+=500', // Длина анимации; подберите значение для плавности
        scrub: true, // Привязка к скроллу
        pin: true, // Фиксация контейнера на время анимации
      },
    });

    // Анимация для верхней карточки (выезжает сверху)
    tl.fromTo(
      topCardRef.current,
      { y: '-100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1, ease: 'power2.out' }
    );

    // Анимация для нижней карточки (выезжает снизу)
    tl.fromTo(
      bottomCardRef.current,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.5' // Одновременное начало с задержкой
    );

    // Очистка при размонтировании компонента
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={rootClassName}>
      <div className={styles.treaty}>
        <Borders cornersWithCrosses={['topRight', 'bottomLeft']} />
        <div className={styles.treaty__info}>
          <h2 className={styles.treaty__title}>
            Сдаем сайты в срок, <br />
            прописанный в договоре
          </h2>
          <Button value="Рассчитать срок и стоимость моего проекта" />
        </div>
        <div className={styles.treaty__cards}>
          <div
            ref={topCardRef}
            className={`${styles.treaty__card} ${styles.treaty__card__top}`}
          >
            <p className={styles.treaty__card__subtitle}>no-code</p>
            <p className={styles.treaty__card__title}>от 14 дней</p>
          </div>
          <div
            ref={bottomCardRef}
            className={`${styles.treaty__card} ${styles.treaty__card__bottom}`}
          >
            <p className={styles.treaty__card__subtitle}>разработка на коде</p>
            <p className={styles.treaty__card__title}>от 30 дней</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treaty;