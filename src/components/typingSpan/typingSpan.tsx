"use client";

import React, { FC, useState, useEffect, useRef } from 'react';
import styles from './typingSpan.module.scss';
import gsap from 'gsap';

type TypingSpanProps = {
  words: string[];
  interval?: number;
};

const TypingSpan: FC<TypingSpanProps> = ({
  words,
  interval = 2000,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const animateText = () => {
      // Анимация появления текста сверху
      gsap.fromTo(textRef.current,
        {
          y: -50,
          opacity: 0,
          scale: 0.5,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scale: 1,
          onComplete: () => {
            // После показа текста ждем interval мс
            setTimeout(() => {
              // Анимация исчезновения текста вниз
              gsap.to(textRef.current, {
                y: 50,
                scale: 0.5,
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                  setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
              });
            }, interval);
          }
        }
      );
    };

    animateText();
  }, [currentWordIndex, interval, words.length]);

  return (
    <span className={styles.awesome}>
      <span ref={textRef}>
        {words[currentWordIndex]}
      </span>
      <span className={styles.cursor}></span>
    </span>
  );
};

export default TypingSpan;
