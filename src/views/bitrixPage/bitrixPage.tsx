import { FC } from 'react'
import classNames from 'classnames'

import styles from './bitrixPage.module.scss'
import { BitrixPageProps } from './bitrixPage.types'
import Introduce from '@/components/introduce/introduce'
import Wrapper from '@/ui/wrapper/wrapper'
import { PlusWork } from '@/modules/plusWork'
import { FormFirst } from '@/modules/formFirst'
import { CookieBanner } from '@/modules/cookieBanner'
import { Tdbut } from '@/modules/tdbut'
import { BitrixPrice } from '@/modules/bitrixPrice'
import { BitrixQuality } from '@/modules/bitrixQuality'

const BitrixPage: FC<BitrixPageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  const items = [
    {
      title: 'Анализ задач и процессов',
      number: '1',
      text: 'Проводим бриф с командой, выявляем слабые места и цели'
    },
    {
      title: 'Выбор тарифного плана',
      number: '2',
      text: 'Подбираем оптимальный тариф под ваш бизнес и бюджет'
    },
    {
      title: 'Настройка и интеграции',
      number: '3',
      text: 'Разворачиваем CRM, подключаем телефонию, мессенджеры, e-mail'
    },
    {
      title: 'Автоматизация',
      number: '4',
      text: 'Настраиваем воронки, роботов, бизнес-процессы, отчеты'
    },
    {
      title: 'Обучение команды',
      number: '5',
      text: 'Объясняем логику работы в CRM, записываем инструкции'
    },
    {
      title: 'Поддержка и развитие',
      number: '6',
      text: 'Отвечаем на вопросы, вносим улучшения, обновляем систему'
    }
  ]

  const images = {
    onlineOffice: {
      src: '/images/bitrix/online-office.png',
      alt: 'Онлайн-офис',
      width: 1200,
      height: 675
    },
    crm: {
      src: '/images/bitrix/crm.png',
      alt: 'CRM',
      width: 1200,
      height: 675
    },
    automation: {
      src: '/images/bitrix/automation.png',
      alt: 'Автоматизация',
      width: 1200,
      height: 675
    },
    tasks: {
      src: '/images/bitrix/tasks.png',
      alt: 'Задачи',
      width: 1200,
      height: 675
    },
    sites: {
      src: '/images/bitrix/sites.png',
      alt: 'Сайты',
      width: 1200,
      height: 675
    }
  }

  return (
    <main className={rootClassName}>
      <Wrapper>
        <Tdbut
          title='Партнеры'
          description='Bitrix24 — это корпоративный портал, объединяющий в себе более 35 инструментов для управления бизнесом. Это полноценная CRM-система, платформа для управления проектами, онлайн-офис, корпоративный мессенджер и центр автоматизации бизнеса.'
          subDescription='Мы — официальный партнер Bitrix24'
          buttonText='Хочу внедрить'
          buttonHref='#form-first'
        />
        <BitrixQuality images={images} />
        <BitrixPrice buttonHref='#form-first' />
        <PlusWork items={items} />
        <Tdbut
          title='Попробуйте бесплатно!'
          description='Вы можете прямо сейчас испытать возможности Bitrix24.'
          buttonText='Хочу попробовать'
          buttonHref='#form-first'
        />
        <div id='form-first'>
          <FormFirst
            textTitle='Готовы внедрить Bitrix24?'
            textParagraph=''
            formTitleForm='формы "Партнер Bitrix24"'
          />
        </div>
        <CookieBanner />
      </Wrapper>
    </main>
  )
}

export default BitrixPage
