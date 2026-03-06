import { ReactNode } from 'react'

export interface StandartTextProps {
  className?: string
  title?: string
  texts: Array<string | ReactNode>
  marginBottom?: boolean
}
