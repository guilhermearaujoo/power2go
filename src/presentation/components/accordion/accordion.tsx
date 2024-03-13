import React, { memo } from 'react'
import Styles from './accordion-styles.scss'

type AccordionProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode
  title: string
  aditionalClass?: string
}

const Accordion: React.FC<AccordionProps> = ({ children, title, aditionalClass, ...props }) => {
  return (
    <div className={`${Styles.accordion} ${aditionalClass}`} {...props}>
      {title && <div className={Styles.header}>{<h2>{title}</h2>}</div>}
      {children}
    </div>
  )
}

export default memo(Accordion)
