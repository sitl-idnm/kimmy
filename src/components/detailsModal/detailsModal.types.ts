export interface DetailsModalProps {
  className?: string
  /** Тематика страницы: подставляет заголовок и описание в форму (например, лидогенерация). */
  variant?: 'lidogeneraciya'
  /** С какой кнопки открыта модалка — попадает в заявку (страница лидогенерации). */
  formSource?: string
}