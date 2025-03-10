import { FC } from 'react'
import classNames from 'classnames'

import styles from './formSecond.module.scss'
import { FormSecondProps } from './formSecond.types'
import Image from 'next/image'
import { Form, TextForm } from '@/components'

const FormSecond: FC<FormSecondProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <section className={styles.form} id="form">
        <div className={styles.form__circle}>
          <TextForm
            title={'Начнем сотрудничество?'}
            paragraph={'Готовы начать погружение в ваш проект! Просто оставьте ваши контактные данные, мы свяжемся с вами, чтобы собрать информацию и предложить решение.'}
            className={styles.form__second}
          />
          <Image
            src='/images/triangle.png'
            width={600}
            height={600}
            quality={80}
            alt='abstract__cirle'
            className={styles.image}
          />
        </div>
        <div className={styles.form__text}>
          <Form
            mail={true}
            project={true}
            className={styles.input}
            titleForm={'формы "Начнем сотрудничество?"'}
          />
        </div>
      </section>
    </div>
  )
}

export default FormSecond
