import React from "react"
import { Route, Switch } from "react-router-dom"
import { Content, Header } from "ui"
import { Navigation, Basket } from "features"
import { Menu } from "pages"

export const App: React.FC = () => {
  return (
    <>
      <Header>
        <Navigation />
        <Basket />
      </Header>
      <Content>
        <Switch>
          <Route path="/" exact={true} component={Menu} />
        </Switch>
      </Content>
    </>
  )
}
