import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useNavigationHandler = (callback: () => void) => {
	useEffect(() => {
		// Обработчик для кнопок браузера вперед/назад
		const handlePopState = () => {
			callback();
		};

		window.addEventListener('popstate', handlePopState);

		return () => {
			window.removeEventListener('popstate', handlePopState);
		};
	}, [callback]);
};
