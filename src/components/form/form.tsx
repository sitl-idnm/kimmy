import { FC } from 'react'
import classNames from 'classnames'

import styles from './form.module.scss'
import { FormProps } from './form.types'

const Form: FC<FormProps> = ({
  className,
  mail,
  project
}) => {
  const rootClassName = classNames(styles.root, className)
  if ((mail === undefined) && (project === undefined)) {
    return (
      <div className={rootClassName}>
        <form action="" method='POST' className={styles.form}>
          <div className={styles.form_wrapper}>
            <input type="text" placeholder='Имя' required/>
            <label className={styles.placeholder}>Имя</label>
          </div>
          <div className={styles.form_wrapper}>
            <input type="number" placeholder='Телефон' required/>
            <label className={styles.placeholder}>Телефон</label>
          </div>
          <div className={styles.form_wrapper}>
            <input type="checkbox"/>
            <label>Согласен на обработку <a>персональных данных</a></label>
          </div>
          <div className={styles.form_wrapper}>
            <input type="submit" value={'Отправить'}/>
          </div>
        </form>
      </div>
    )
  } else if ((mail !== undefined) && (project !== undefined)) {
    return (
      <div className={rootClassName}>
        <form action="" method='POST'>
          <input type="text" placeholder='Имя' />
          <input type="number" placeholder='Телефон' />
          <input type="mail" placeholder='Почта' />
          <textarea name="" id="" placeholder='Расскажите про свой проект'></textarea>
          <div>
            <input type="checkbox" checked />
            <label>Согласен на обработку <a>персональных данных</a></label>
          </div>
          <div>
            <input type="checkbox" checked />
            <label>Согласен на получение email - рассылок</label>
          </div>
          <input type="submit" value={'Отправить'}/>
        </form>
      </div>
    )
  }
}

export default Form
