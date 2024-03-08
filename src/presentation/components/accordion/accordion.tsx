import React from 'react'
import Styles from './accordion-styles.scss'

interface TableProps {
  children: React.ReactNode
  title: string
}

const Table: React.FC<TableProps> = ({ children, title }) => {
  return (
    <div className={Styles.accordion}>
      {title && <div className={Styles.header}>{<h2>{title}</h2>}</div>}
      {children}
    </div>
  )
}

export default Table
