'use client'

import { FC, useState } from 'react'
import classNames from 'classnames'

import styles from './modalForm.module.scss'
import { ModalFormProps } from './modalForm.types'
import axios from 'axios'

import PhoneDef from '../../shared/assets/icons/phone - default.svg'
import PhoneActive from '../../shared/assets/icons/phone - active.svg'
import WaDef from '../../shared/assets/icons/wa - default.svg'
import WaActive from '../../shared/assets/icons/wa - active.svg'
import TgDef from '../../shared/assets/icons/tg - default.svg'
import TgActive from '../../shared/assets/icons/tg - active.svg'
import Link from 'next/link'

const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
	const value = event.target.value;
	event.target.value = value.replace(/\d/g, '');
};

const isValidEmail = (email: string) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

const ModalForm: FC<ModalFormProps> = ({ className, development, details, count, titleForm }) => {
	const rootClassName = classNames(styles.root, className)
	const [selectedContactMethod, setSelectedContactMethod] = useState('number')
	const [successMessage, setSuccessMessage] = useState<{ text: string; isSuccess: boolean } | null>(null)
	// Время, когда пользователь дал согласие на обработку персональных данных
	const [policyConsentTimestamp, setPolicyConsentTimestamp] = useState<Date | null>(null)

	const handleNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		event.target.value = value.replace(/\D/g, '')
	}

	const sanitizeInput = (input: string) => {
		const sanitized = input.replace(/<[^>]*>/g, '');
		if (sanitized !== input) {
			throw new Error('HTML tags are not allowed');
		}
		return sanitized;
	};

	const closeMessage = () => {
		setSuccessMessage(null);
	};

	const handlePolicyCheckboxChange = () => {
		const now = new Date();
		setPolicyConsentTimestamp(now);
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
		if (data.mailModal && !isValidEmail(data.mailModal as string)) {
			setSuccessMessage({ text: 'Ошибка отправки заявки. Неправильный email адрес.', isSuccess: false });
			return;
		}

		if (details === false && count === false && development === false) {
			try {
				data.commentModal = sanitizeInput(data.commentModal as string);
			} catch (error) {
				setSuccessMessage({ text: 'Ошибка отправки заявки. HTML теги не разрешены.', isSuccess: false });
				return;
			}
		}

		const token = '7862004029:AAFZ807gLMhUIzqjfh4DB62muUmzWv9JfrY'
		const chatId = '-4654232429'
		const message = `Новая заявка c ${titleForm} на сайте-визитке:\nИмя: ${data.nameModal}\nТелефон: ${data.phoneModal}${data.mailModal ? `\nПочта: ${data.mailModal}` : ''}${data.commentModal ? `\nРасскажите про свой проект: ${data.commentModal}` : ''}${policyConsentTimestamp ? `\nВремя согласия: ${policyConsentTimestamp.toLocaleString()}` : ''}\nПредпочтительный способ связи: ${selectedContactMethod}`

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
		<div className={rootClassName} style={details ? { height: '90vh' } : {}}>
			{
				details ? <h2 className={styles.root__title}>Заказать сайт</h2>
					: count ? <h2 className={styles.root__title}>Рассчитать срок и стоимость моего проекта</h2> : development ? <h2 className={styles.root__title}>Начнем сотрудничество?</h2> : <h2 className={styles.root__title}>Получить консультацию</h2>
			}
			<div className={styles.root__content}>
				<div className={styles.root__content__text}>
					{details ? null : <p className={styles.white}>Готовы начать погружение в ваш проект!</p>}
					<p className={styles.gray}>
						{details ? 'Заполните краткую форму, чтобы мы связались с вами и обсудили все детали.' : count ? 'Заполните краткую форму, чтобы мы связались с вами и рассчитали сроки и стоимость разработки сайта.' : 'Просто оставьте контактные данные, мы свяжемся с вами, чтобы собрать информацию и предложить решение.'}
					</p>
				</div>
				<form onSubmit={handleSubmit} action="POST" className={styles.root__content__form}>
					<div className={styles.root__content__form__first__line}>
						<div>
							<input
								type="text"
								name="nameModal"
								placeholder="Имя"
								className={`${styles.root__content__form__first__line__name} ${styles.input}`}
								required
								onChange={handleNameInput}
							/>
							<label className={styles.placeholder}>Имя*</label>
						</div>
						<div>
							<input
								type="text"
								name="phoneModal"
								placeholder="Телефон"
								className={`${styles.root__content__form__first__line__number} ${styles.input}`}
								required
								onChange={handleNumberInput}
							/>
							<label className={styles.placeholder}>Телефон*</label>
						</div>
					</div>
					{details ? null : <div className={styles.root__content__form__second__line}>
						<div>
							<input
								type="mail"
								name="mailModal"
								placeholder="Почта"
								className={styles.root__content__form__second__line__mail}
								onFocus={(e) => e.target.placeholder = ''}
								onBlur={(e) => e.target.placeholder = 'Почта'}
							/>
							<label className={styles.placeholder}>Почта</label>
						</div>
						<div>
							<textarea
								name="commentModal"
								placeholder="Комментарий"
								onFocus={(e) => e.target.placeholder = ''}
								onBlur={(e) => e.target.placeholder = 'Комментарий'}
							/>
							<label className={styles.placeholder}>Комментарий</label>
						</div>
					</div>}
					<div className={styles.root__content__form__third__line}>
						<h3 className={styles.radio__title}>Где с вами связаться?</h3>
						<div className={styles.radio__list}>
							<div className={styles.input__wrapper}>
								<input
									type="radio"
									name="contactButton"
									id="rad1"
									checked={selectedContactMethod === 'number'}
									value="number"
									onChange={() => setSelectedContactMethod('number')}
								/>
								<label htmlFor="rad1" className={styles.radio__num}>
									{selectedContactMethod === 'number' ? <PhoneActive /> : <PhoneDef />}
									Телефон
								</label>
							</div>
							<div className={styles.input__wrapper}>
								<input
									type="radio"
									name="contactButton"
									id="rad2"
									checked={selectedContactMethod === 'tg'}
									value="tg"
									onChange={() => setSelectedContactMethod('tg')}
								/>
								<label htmlFor="rad2" className={styles.radio__tg}>
									{selectedContactMethod === 'tg' ? <TgActive /> : <TgDef />}
									Telegram
								</label>
							</div>
							<div className={styles.input__wrapper}>
								<input
									type="radio"
									name="contactButton"
									id="rad3"
									checked={selectedContactMethod === 'whatsapp'}
									value="whatsapp"
									onChange={() => setSelectedContactMethod('whatsapp')}
								/>
								<label htmlFor="rad3" className={styles.radio__wa}>
									{selectedContactMethod === 'whatsapp' ? <WaActive /> : <WaDef />}
									WhatsApp
								</label>
							</div>
						</div>
					</div>
					<div className={styles.wrapper}>
						<div className={styles.form_wrapper}>
							<input type="checkbox" required onChange={handlePolicyCheckboxChange} />
							<label>
								Согласен на обработку <Link href='/privacy-policy' target='_blank' style={{ color: '#CB172C' }}>персональных данных</Link>
							</label>
						</div>
						<div className={styles.form_wrapper}>
							<input type="checkbox" />
							<label>Согласен на получение email - рассылок</label>
						</div>
						<div className={styles.form_wrapper}>
							{details ? <input type="submit" value={'Заказать сайт'} /> : count ? <input type="submit" value={'Рассчитать '} /> : <input type="submit" value={'Получить консультацию'} />}
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
			</div>
		</div>
	)
}

export default ModalForm
