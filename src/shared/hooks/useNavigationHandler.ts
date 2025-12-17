import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useNavigationHandler = (callback: () => void) => {
	const pathname = usePathname();

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

	// Обрабатываем изменения пути через Next.js навигацию
	useEffect(() => {
		callback();

		// Обновляем ScrollTrigger после того, как компоненты инициализировались
		// Даем время DOM обновиться и компонентам смонтироваться
		const timer = setTimeout(() => {
			ScrollTrigger.refresh();
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [pathname, callback]);
};
