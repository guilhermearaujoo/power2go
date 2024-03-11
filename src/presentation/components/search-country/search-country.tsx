import Styles from './search-country.scss'
import { Input } from '@/presentation/components'

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchCountry: React.FC = () => {
  const [search, setSearch] = useState({ search: '' })
  const history = useHistory()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    event.currentTarget.reset()
    history.push(`/${search.search}`)
    history.go(0)
  }

  return (
      <form onSubmit={onSubmit} className={Styles.searchCountry}>
        <Input
            type="text"
            name="search"
            state={search}
            setState={setSearch}
            placeholder="Search for a country"
        />
        <button type='submit'>Search</button>
      </form>
  )
}

export default SearchCountry
