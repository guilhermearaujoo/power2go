import Styles from './simple-country-styles.scss'
import { LoadCountry } from '@/domain/usecases'
import { CountryModel, ConsultHistoryModel } from '@/domain/models'
import { Context } from '@/main/factories/context/context'
import { Loading, Table, Accordion } from '@/presentation/components'

import React, { useEffect, useCallback, useContext } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {
  loadCountry: LoadCountry
}

const SimpleCountry: React.FC<Props> = ({ loadCountry }: Props) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [country, setCountry] = React.useState<CountryModel>(null)
  const { pathname } = useLocation()
  const { setConsultHistory, consultHistory } = useContext(Context)

  const addCountryToConsultHistory = (country: CountryModel): void => {
    if (!country) {
      return
    }

    const uniqueHistory = consultHistory().filter(
      (history: ConsultHistoryModel) => history.country !== country.name
    )
    uniqueHistory.push({
      date: new Date().toLocaleDateString(),
      country: country?.name,
      link: `/${country?.name.toLowerCase().split(' ').join('%20')}`
    })
    setConsultHistory(uniqueHistory)
  }

  const loadCountryByName = useCallback(
    (country) => {
      loadCountry
        .load(country)
        .then((countryData) => {
          setCountry(countryData)
          addCountryToConsultHistory(countryData)
        })
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

      <Accordion title={`Showing ${country?.name || ''} information`}>
        <Table
          headers={['Name', 'Capital', 'Currency', 'Language', 'Population']}
          values={[
            country && [
              country.name,
              country.capital,
              country.currency,
              country.language,
              country.population
            ]
          ]}
        />
      </Accordion>
    </div>
  )
}

export default SimpleCountry
