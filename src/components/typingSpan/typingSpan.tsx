"use client";

import React, { FC, useState, useEffect } from 'react';
import styles from './typingSpan.module.scss';

type TypingSpanProps = {
  words: string[];
  interval?: number; // интервал замены слова (в миллисекундах)
  typingSpeed?: number; // скорость печати по буквам
};

const TypingSpan: FC<TypingSpanProps> = ({
  words,
  interval = 2000,
  typingSpeed = 100
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [letters, setLetters] = useState<{ char: string; isFlipping: boolean }[]>([]);
  const maxLength = Math.max(...words.map(word => word.length));

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const nextWord = words[(currentWordIndex + 1) % words.length];
    let timeoutId: NodeJS.Timeout;

    const updateWord = () => {
      const newLetters = Array(maxLength).fill({ char: '', isFlipping: false }).map((_, index) => ({
        char: currentWord[index] || ' ',
        isFlipping: false
      }));
      setLetters(newLetters);

      timeoutId = setTimeout(() => {
        // Запускаем анимацию для каждой буквы последовательно
        for (let i = 0; i < maxLength; i++) {
          setTimeout(() => {
            setLetters(prev => prev.map((letter, idx) =>
              idx === i ? { char: nextWord[i] || ' ', isFlipping: true } : letter
            ));
          }, i * typingSpeed);
        }

        // После завершения анимации всех букв переходим к следующему слову
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, maxLength * typingSpeed + interval);
      }, interval);
    };

    updateWord();

    return () => clearTimeout(timeoutId);
  }, [currentWordIndex, interval, maxLength, typingSpeed, words]);

  return (
    <span className={styles.awesome}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`${styles.letter} ${letter.isFlipping ? styles.flip : ''}`}
        >
          {letter.char}
        </span>
      ))}
      <span className={styles.cursor}></span>
    </span>
  );
};

export default TypingSpan;
