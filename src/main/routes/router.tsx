import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { makeHome } from '@/main/factories/pages'
import ContextProvider from '@/main/factories/context/context'

const Router: React.FC = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={makeHome} />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default Router
