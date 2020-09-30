import React from "react"
import { Route, Switch } from "react-router-dom"
import { Content, Footer, Header } from "ui"
import { Navigation, Basket } from "features"
import { Menu } from "pages"

export const App: React.FC = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Content>
        <Switch>
          <Route path="/" exact={true} component={Menu} />
        </Switch>
        <Basket />
      </Content>
      <Footer />
    </>
  )
}
