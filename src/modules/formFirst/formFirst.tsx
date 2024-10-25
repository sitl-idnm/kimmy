import { FC } from 'react'
import classNames from 'classnames'

import styles from './formFirst.module.scss'
import { FormFirstProps } from './formFirst.types'
import { Form, TextForm } from '@/components'
import Image from 'next/image'

const FormFirst: FC<FormFirstProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <section className={styles.form}>
        <div className={styles.form__circle}>
          <Image
            src='/images/circle.png'
            width={780}
            height={780}
            quality={80}
            alt='abstract__cirle'
            className={styles.image}
          />
        </div>
        <div className={styles.form__text}>
          <TextForm
            title={'Тоже нужен сайт?'}
            paragraph={'Оставьте заявку, и мы подготовим для вас коммерческое предложение с вариантами разработки, сроками и бюджетом.'}
          />
          <Form />
        </div>
      </section>
    </div>
  )
}

export default FormFirst
