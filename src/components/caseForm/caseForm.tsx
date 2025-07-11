'use client'
import { FC, useState } from 'react'
import classNames from 'classnames'

import styles from './caseForm.module.scss'
import { CaseFormProps } from './caseForm.types'
import axios from 'axios'
import Image from 'next/image'
import { Borders } from '@/ui'
import Link from 'next/link'

const CaseForm: FC<CaseFormProps> = ({
  className,
  image,
  titleForm
}) => {
  const rootClassName = classNames(styles.root, className)
  const [successMessage, setSuccessMessage] = useState<{ text: string; isSuccess: boolean } | null>(null)
  // Время, когда пользователь согласился на политику обработки данных
  const [policyConsentTimestamp, setPolicyConsentTimestamp] = useState<Date | null>(null)

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    event.target.value = value.replace(/\d/g, '');
  };

  const handleNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    event.target.value = value.replace(/\D/g, '');
  };

  const sanitizeInput = (input: string) => {
    const sanitized = input.replace(/<[^>]*>/g, '');
    if (sanitized !== input) {
      throw new Error('HTML tags are not allowed');
    }
    return sanitized;
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const closeMessage = () => {
    setSuccessMessage(null);
  };

  const handlePolicyCheckboxChange = () => {
    const now = new Date();
    setPolicyConsentTimestamp(now);
    // Сохраняем в localStorage при необходимости
    try {
      localStorage.setItem('policyConsentTimestamp', now.toISOString());
    } catch (e) {
      console.error('Не удалось сохранить время согласия в localStorage', e);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    if (data.mail && !isValidEmail(data.mail as string)) {
      setSuccessMessage({ text: 'Ошибка отправки заявки. Неправильный email адрес.', isSuccess: false })
      return
    }
    try {
      data.project = sanitizeInput(data.project as string)
    } catch (error) {
      setSuccessMessage({ text: 'Ошибка отправки заявки. HTML теги не разрешены.', isSuccess: false })
      return
    }
    const token = '7862004029:AAFZ807gLMhUIzqjfh4DB62muUmzWv9JfrY'
    const chatId = '-4654232429'
    const message = `Новая заявка с ${titleForm} на сайте-визитке:\nИмя: ${data.name}\nТелефон: ${data.phone}${data.mail ? `\nПочта: ${data.mail}` : ''}${data.project ? `\nСообщение: ${data.project}` : ''}${policyConsentTimestamp ? `\nВремя согласия: ${policyConsentTimestamp.toLocaleString()}` : ''}`

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      })
      setSuccessMessage({ text: 'Форма успешно отправлена!', isSuccess: true });
      // Очищаем форму после успешной отправки
    } catch (error) {
      console.error('Ошибка при отправке:', error)
      setSuccessMessage({ text: 'Ошибка при отправке заявки.', isSuccess: false })
    }
  }

  return (
    <div className={rootClassName}>
      <Borders cornersWithCrosses={['topLeft', 'bottomRight', 'topRight', 'bottomLeft']} />
      <div className={styles.form_header}>
        <h2 className={styles.form_header_title}>Тоже нужен сайт?</h2>
        <Image
          src={image}
          alt='image'
          width={760}
          height={549}
          quality={100}
        />
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_wrapper}>
          <h3>Оставьте заявку</h3>
        </div>
        <div className={styles.form_wrapper}>
          <input type="text" name="name" placeholder='Имя' required onChange={handleNameInput} style={{ color: 'black', backgroundColor: '#FAFAFA' }} />
          <label className={styles.placeholder}>Имя*</label>
        </div>
        <div className={styles.form_wrapper}>
          <input type="text" name="phone" placeholder='Телефон' required onChange={handleNumberInput} style={{ color: 'black', backgroundColor: '#FAFAFA' }} />
          <label className={styles.placeholder}>Телефон*</label>
        </div>
        <div className={styles.form_wrapper}>
          <input type="mail" name="mail" placeholder='Почта' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Почта'} />
          <label className={styles.placeholder}>Email</label>
        </div>
        <div className={styles.form_wrapper}>
          <textarea name="project" placeholder='Сообщение' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Сообщение'} ></textarea>
          <label className={styles.placeholder}>Сообщение</label>
        </div>
        <div className={styles.form_wrapper}>
          <input type="checkbox" required onChange={handlePolicyCheckboxChange} />
          <label>Согласен на обработку <Link href='/privacy-policy' target='_blank' style={{ color: '#CB172C' }}>персональных данных</Link></label>
        </div>
        <div className={styles.form_wrapper}>
          <input type="checkbox" />
          <label>Согласен на получение email - рассылок</label>
        </div>
        <div className={styles.form_wrapper}>
          <input type="submit" value={'Отправить'} />
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
      </form>
    </div>
  )
}

export default CaseForm
