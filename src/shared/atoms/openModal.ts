import { atom } from "jotai";

// Используем примитивное значение вместо объекта
export const openModalContent = atom<string>('')

/** Источник открытия модалки с формой (для лидогенерации — с какой кнопки открыли). Попадает в заявку. */
export const modalFormSource = atom<string>('')
