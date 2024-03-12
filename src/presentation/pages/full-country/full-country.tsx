import Styles from './full-country-styles.scss'
import { LoadCountry } from '@/domain/usecases'
import { CountryModel, ConsultHistoryModel } from '@/domain/models'
import { Context } from '@/main/factories/context/context'
import { Loading, Accordion } from '@/presentation/components'

import React, { useEffect, useCallback, useContext } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {
  loadCountry: LoadCountry
}

const FullCountry: React.FC<Props> = ({ loadCountry }: Props) => {
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
      link: `http://localhost:8081/full/${country?.name
        .toLowerCase()
        .split(' ')
        .join('%20')}`
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
      loadCountryByName(pathname.split('/')[2])
    }, 300)
  }, [])

  return (
    <div className={Styles.fullCountry}>
      {isLoading && <Loading />}
      <Accordion title={`Showing ${country?.name || ''} information`}>
        <div className={Styles.fullCountryContainer}>
          <img src={country?.flag} alt={country?.name} />
          <div className={Styles.asideInformation}>
            <h2>Republica Federativa do Brasil</h2>
            <div className={Styles.informationWrapper}>
              <p>
                <b>Name: </b>
                {country?.name}
              </p>
              <p>
                <b>Capital: </b>
                {country?.capital}
              </p>
              <p>
                <b>Currency: </b>
                {country?.currency}
              </p>
              <p>
                <b>Language: </b>
                {country?.language}
              </p>
              <p>
                <b>Population: </b>
                {country?.population} pep.
              </p>
            </div>
          </div>
        </div>
      </Accordion>
    </div>
  )
}

export default FullCountry
