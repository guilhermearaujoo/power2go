import React, { useEffect } from 'react'
import Styles from './simple-country-styles.scss'
import { useLocation } from 'react-router-dom'
import { LoadCountry } from '@/domain/usecases'

type Props = {
  loadCountry: LoadCountry
}

const SimpleCountry: React.FC<Props> = ({ loadCountry }: Props) => {
  useEffect(() => {
    loadCountry.load('brasil').then(countries => console.log(countries)).catch(console.error)
  }, [])

  const { pathname } = useLocation()
  return <div className={Styles.simpleCountry}>
        {pathname.split('/')[1]}
  </div>
}

export default SimpleCountry
