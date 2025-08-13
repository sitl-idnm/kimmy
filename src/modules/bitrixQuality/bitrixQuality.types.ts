export interface BitrixQualityImage {
  src: string
  alt?: string
  width?: number
  height?: number
}

export interface BitrixQualityProps {
  className?: string
  images?: {
    onlineOffice?: BitrixQualityImage
    crm?: BitrixQualityImage
    tasks?: BitrixQualityImage
    sites?: BitrixQualityImage
    automation?: BitrixQualityImage
  }
}