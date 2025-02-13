import { ComponentProps, ElementType, ReactNode } from 'react'

type ButtonOwnProps<E extends ElementType = ElementType> = {
  as?: E
  tag?: E
  className?: string
  children?: string | ReactNode
  maxWidth?: string
}

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>
