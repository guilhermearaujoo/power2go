import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from '@/presentation/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router