'use client'
import { FC, useState } from 'react'
import classNames from 'classnames'
import axios from 'axios'

import styles from './form.module.scss'
import { FormProps } from './form.types'

const Form: FC<FormProps> = ({
  className,
  mail,
  project
}) => {
  const rootClassName = classNames(styles.root, className)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    const token = '7862004029:AAFZ807gLMhUIzqjfh4DB62muUmzWv9JfrY'
    const chatId = '-4654232429'
    const message = `Новая заявка:\nИмя: ${data.name}\nТелефон: ${data.phone}${data.mail ? `\nПочта: ${data.mail}` : ''}${data.project ? `\nРасскажите про свой проект: ${data.project}` : ''}`

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      })
      setSuccessMessage('Form submitted successfully!')
    } catch (error) {
      console.error('Error sending message to Telegram:', error)
      setSuccessMessage('Failed to submit form.')
    }
  }

  return (
    <div className={rootClassName}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_wrapper}>
          <input type="text" name="name" placeholder='Имя' required />
          <label className={styles.placeholder}>Имя</label>
        </div>
        <div className={styles.form_wrapper}>
          <input type="number" name="phone" placeholder='Телефон' required />
          <label className={styles.placeholder}>Телефон</label>
        </div>
        {mail !== undefined && (
          <div className={styles.form_wrapper}>
            <input type="mail" name="mail" placeholder='Почта' required />
            <label className={styles.placeholder}>Почта</label>
          </div>
        )}
        {project !== undefined && (
          <div className={styles.form_wrapper}>
            <textarea name="project" placeholder='Расскажите про свой проект' required></textarea>
            <label className={styles.placeholder}>Расскажите про свой проект</label>
          </div>
        )}
        <div className={styles.form_wrapper}>
          <input type="checkbox" required/>
          <label>Согласен на обработку <a>персональных данных</a></label>
        </div>
        {mail !== undefined && (
          <div className={styles.form_wrapper}>
            <input type="checkbox" />
            <label>Согласен на получение email - рассылок</label>
          </div>
        )}
        <div className={styles.form_wrapper}>
          <input type="submit" value={'Отправить'} />
        </div>
        {successMessage && (
          <div className={styles.successMessage}>
            {successMessage}
          </div>
        )}
      </form>
    </div>
  )
}

export default Form
