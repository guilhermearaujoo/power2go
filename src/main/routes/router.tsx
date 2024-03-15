import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { makeHome, makeSimpleCountry, makeFullCountry } from '@/main/factories/pages'
import ContextProvider from '@/main/factories/context/context'
import { SearchCountry, Notification } from '@/presentation/components'

const Router: React.FC = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Notification />
        <SearchCountry />
        <Switch>
          <Route path="/full/:country" component={makeFullCountry}/>
          <Route path="/:country" component={makeSimpleCountry} />
          <Route path="/" component={makeHome} />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default Router
