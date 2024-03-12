import React, { memo } from 'react'
import Styles from './not-found-styles.scss'
import { HiBan } from 'react-icons/hi'

const NotFound: React.FC = () => {
  return (
    <div className={Styles.notFound}>
      <HiBan />
      <span>Nenhum resultado encontrado</span>
    </div>
  )
}

export default memo(NotFound)
