export interface ModalFormProps {
  className?: string
  details?: boolean
  count?: boolean
  start?: boolean
  /** Тематика при details: подставляет заголовок, описание и текст кнопки (например, лидогенерация). */
  detailsVariant?: 'lidogeneraciya'
  /** С какой кнопки открыта модалка — добавляется в текст заявки (страница лидогенерации). */
  formSource?: string
}
