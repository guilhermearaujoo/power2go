import React from 'react'
import Styles from './simple-country-styles.scss'
import { LoadCountry } from '@/domain/usecases'

type Props = {
  loadCountry: LoadCountry
}

const SimpleCountry: React.FC<Props> = ({ loadCountry }: Props) => {
  return <div className={Styles.simpleCountry}>
  </div>
}

export default SimpleCountry
