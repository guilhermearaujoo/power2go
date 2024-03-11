import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { makeHome, makeSimpleCountry } from '@/main/factories/pages'
import ContextProvider from '@/main/factories/context/context'
import { SearchCountry } from '@/presentation/components'

const Router: React.FC = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <SearchCountry />
        <Switch>
          <Route path="/:country" component={makeSimpleCountry} />
          <Route path="/" component={makeHome} />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default Router
