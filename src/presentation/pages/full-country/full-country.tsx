import Styles from './full-country-styles.scss'
import { LoadCountry } from '@/domain/usecases'
import { CountryModel, ConsultHistoryModel } from '@/domain/models'
import { Context } from '@/main/factories/context/context'
import { Loading, Accordion, NotFound } from '@/presentation/components'

import React, { useEffect, useCallback, useContext } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {
  loadCountry: LoadCountry
}

const FullCountry: React.FC<Props> = ({ loadCountry }: Props) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [country, setCountry] = React.useState<CountryModel>(null)
  const { pathname } = useLocation()
  const { setConsultHistory, consultHistory, setNotification } = useContext(Context)

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
        .catch((_e) => {
          setNotification({
            message: 'Country not found',
            severity: 'error'
          })
        })
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

  const getAsideInformationFields = useCallback(
    (country: CountryModel) => {
      return [
        { label: 'Name', value: country?.name },
        { label: 'Native Name', value: country?.nativeName },
        { label: 'Capital', value: country?.capital },
        { label: 'Currency', value: country?.currency },
        { label: 'Language', value: country?.language },
        { label: 'Start of Week', value: country?.startOfWeek },
        { label: 'Population', value: `${country.population} ppl` },
        { label: 'Area', value: `${country?.area} km²` },
        { label: 'Continents', value: country?.continents?.join(', ') },
        { label: 'Latitude and Longitude', value: country?.latlng?.join(', ') },
        {
          label: 'Borders',
          value: (
            <span className={Styles.countriesLinksWrapper}>
              {country?.borders?.map((ctry, index) => (
                <a key={index} href={`/full/${ctry}`}>
                  {ctry}
                </a>
              )) || 'No borders '}
            </span>
          )
        }
      ]
    },
    [country]
  )

  return (
    <div className={Styles.fullCountry}>
      {isLoading && <Loading />}
      <Accordion title={`Showing ${country?.name || ''} information`}>
        {country?.name
          ? (
          <div className={Styles.fullCountryContainer}>
            <img src={country?.flag} alt={country?.name} />
            <div className={Styles.asideInformation}>
              <h2>{country?.officialName}</h2>
              <div className={Styles.informationWrapper}>
                {getAsideInformationFields(country).map((field) => (
                  <p key={field.label}>
                    <b>{field.label}: </b>
                    {field.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
            )
          : (
          <NotFound />
            )}
      </Accordion>
    </div>
  )
}

export default FullCountry
