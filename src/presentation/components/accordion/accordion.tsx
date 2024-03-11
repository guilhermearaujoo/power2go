import React, { memo } from 'react'
import Styles from './accordion-styles.scss'

interface AccordionProps {
  children: React.ReactNode
  title: string
}

const Accordion: React.FC<AccordionProps> = ({ children, title }) => {
  return (
    <div className={Styles.accordion}>
      {title && <div className={Styles.header}>{<h2>{title}</h2>}</div>}
      {children}
    </div>
  )
}

export default memo(Accordion)
