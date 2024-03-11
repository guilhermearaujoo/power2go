import React from 'react'
import Styles from './home-styles.scss'
import { ConsultHistory } from './components'

const Home: React.FC = () => {
  return <div className={Styles.home}>
    <ConsultHistory />
  </div>
}

export default Home
