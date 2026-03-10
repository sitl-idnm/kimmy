/**
 * Отправка целей при успешной отправке форм:
 * — Яндекс.Метрика: ym(id, 'reachGoal', goalId)
 * — VK Pixel: VK.Goal(goalId) — сработает, если на сайте подключён скрипт пикселя VK Рекламы
 */

const YM_ID = process.env.NEXT_PUBLIC_YM_ID || '103883810'

declare global {
  interface Window {
    ym?: (id: string, method: string, goalId: string) => void
    VK?: { Goal: (goalId: string) => void }
  }
}

/**
 * Вызвать после успешной отправки формы.
 * goalId — уникальный идентификатор формы (например: leadgen_form_first_1, form_second).
 */
export function reachFormGoal(goalId: string): void {
  if (typeof window === 'undefined') return

  try {
    if (window.ym) {
      window.ym(YM_ID, 'reachGoal', goalId)
    }
  } catch {
    // ignore
  }

  try {
    if (typeof window.VK?.Goal === 'function') {
      window.VK.Goal(goalId)
    }
  } catch {
    // VK Pixel может быть не подключён
  }
}
