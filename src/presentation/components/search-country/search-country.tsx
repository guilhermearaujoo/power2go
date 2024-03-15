import Styles from './search-country.scss'
import { Input, Toggle } from '@/presentation/components'

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchCountry: React.FC = () => {
  const history = useHistory()
  const [search, setSearch] = useState({ search: '', toggle: history.location.pathname.includes('full') })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    history.push(`${search.toggle && search.search ? '/full/' : '/'}${search.search}`)
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
      <Toggle
        name="toggle"
        placeholder="Details ?"
        state={search}
        setState={setSearch}
      />
      <button type="submit">Search Country</button>
    </form>
  )
}

export default SearchCountry
