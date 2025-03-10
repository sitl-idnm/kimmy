'use client'

import { FC, useState } from 'react'
import classNames from 'classnames'

import styles from './widgetCase.module.scss'
import { WidgetCaseProps } from './widgetCase.types'
import axios from 'axios';

import Close from '@icons/widgetClose.svg'
import Link from 'next/link'

const WidgetCase: FC<WidgetCaseProps> = ({
  className,
  titleForm
}) => {
  const rootClassName = classNames(styles.root, className)
  const [isOpen, setIsOpen] = useState(true)
  const [successMessage, setSuccessMessage] = useState<{ text: string; isSuccess: boolean } | null>(null)

  const handleNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    event.target.value = value.replace(/\D/g, '')
  }

  const closeMessage = () => {
    setSuccessMessage(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    const token = '7862004029:AAFZ807gLMhUIzqjfh4DB62muUmzWv9JfrY'
    const chatId = '-4654232429'
    const message = `Новая заявка с ${titleForm} на сайте-визитке:\nТелефон: ${data.phoneModal}`

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      })
      setSuccessMessage({ text: 'Форма успешно отправлена!', isSuccess: true });
      // Очищаем форму после успешной отправки
    } catch (error) {
      console.error('Error sending message to Telegram:', error)
      setSuccessMessage({ text: 'Ошибка при отправке заявки.', isSuccess: false })
    }
  }

  return (
    <div className={rootClassName} style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className={styles.wrapper}>
        <Close className={styles.close} onClick={() => setIsOpen(false)} />
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.content__title}>Тоже нужен сайт?</h2>
            <p className={styles.content__description}>Оставьте заявку и получите консультацию по разработке сайта</p>
          </div>
          <div className={styles.forms}>
            <form onSubmit={handleSubmit} action="POST" className={styles.form}>
              <div className={styles.form__wrapper}>
                <div className={styles.form__wrapper__input}>
                  <input
                    type="text"
                    name="phoneModal"
                    placeholder="Телефон"
                    className={`${styles.input}`}
                    required
                    onChange={handleNumberInput}
                  />
                  <label className={styles.placeholder}>+7 (999) 999 99-99</label>
                </div>
                <div className={styles.form__wrapper__button}>
                  <input type="submit" value={'Получить консультацию'} />
                </div>
                {successMessage && (
                  <div className={`${styles.successMessage} ${successMessage.isSuccess ? styles.success : styles.error}`}>
                    {successMessage.isSuccess && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="12" fill="white" />
                        <path d="M8 12L11.5 16L16 7" stroke="#CB172C" stroke-width="1.5" stroke-linecap="round" />
                      </svg>
                    )}
                    {successMessage.text}
                    <button onClick={closeMessage} className={styles.closeButton}>
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </form>
            <p className={styles.form__description}>Нажимая на кнопку &quot;Получить консультацию&quot; Вы соглашаетесь с <Link href='/privacy-policy' target='_blank' style={{ color: '#CB172C'}}>обработкой персональных данных</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WidgetCase
