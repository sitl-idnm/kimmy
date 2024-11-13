'use client'

import { FC, useRef } from 'react'
import classNames from 'classnames'

import styles from './conversion.module.scss'
import { ConversionProps } from './conversion.types'
import { ConversionTitle, ConversionType } from '@/components'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)


const Conversion: FC<ConversionProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <ConversionTitle />
      <ConversionType />
    </div>
  )
}

export default Conversion
