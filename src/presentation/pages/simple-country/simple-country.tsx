import React, { useEffect, useCallback } from 'react'
import Styles from './simple-country-styles.scss'
import { useLocation } from 'react-router-dom'
import { LoadCountry } from '@/domain/usecases'
import { Loading, Table, Accordion } from '@/presentation/components'
import { CountryModel } from '@/domain/models'

type Props = {
  loadCountry: LoadCountry
}

const SimpleCountry: React.FC<Props> = ({ loadCountry }: Props) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [country, setCountry] = React.useState<CountryModel>(null)
  const { pathname } = useLocation()

  const loadCountryByName = useCallback(
    (country) => {
      loadCountry
        .load(country)
        .then((countryData) => setCountry(countryData))
        .catch(console.error)
        .finally(() => setIsLoading(false))
    },
    [pathname]
  )

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
      loadCountryByName(pathname.split('/')[1])
    }, 300)
  }, [])

  return (
    <div className={Styles.simpleCountry}>
      {isLoading && <Loading />}
      {country && (
        <Accordion title={`Showing ${country.name} information`}>
          <Table
            headers={['Name', 'Capital', 'Currency', 'Language', 'Population']}
            values={[
              [
                country.name,
                country.capital,
                country.currency,
                country.language,
                country.population
              ]
            ]}
          />
        </Accordion>
      )}
    </div>
  )
}

export default SimpleCountry
