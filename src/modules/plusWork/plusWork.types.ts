export interface PlusWorkItem {
  title?: string
  number?: string | number
  text?: string
}

export interface PlusWorkProps {
  className?: string
  items?: PlusWorkItem[]
}