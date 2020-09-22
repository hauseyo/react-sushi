import React from "react"
import { Route, Switch } from "react-router-dom"
import { Header } from "ui"
import { Navigation } from "features"
import { Menu } from "pages"

export const App: React.FC = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Switch>
        <Route path="/" exact={true} component={Menu} />
      </Switch>
    </>
  )
}
