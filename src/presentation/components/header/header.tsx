import React from 'react'
import Styles from './header-styles.scss'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

const Header: React.FC = () => {
  const history = useHistory()
  return (
    <div className={Styles.header}>
      {history.location.pathname !== '/' && (
        <a href="/" className={Styles.goBack}>
          <BiLeftArrowAlt />
          Voltar
        </a>
      )}
      <h1>Country Search</h1>
    </div>
  )
}

export default Header
