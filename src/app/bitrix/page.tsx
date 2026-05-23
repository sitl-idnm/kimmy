import BitrixPage from '@views/bitrixPage'
import type { Metadata } from 'next'


export const metadata: Metadata = {
	title: 'Bitrix Партнер',
	description: 'Страница партнера Bitrix'
}

export default function Home() {
	return <BitrixPage />
}
