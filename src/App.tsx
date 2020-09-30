import React from "react"
import { Route, Switch } from "react-router-dom"
import { Content, Footer, Header } from "ui"
import { Navigation } from "features"
import { Menu, About } from "pages"

export const App: React.FC = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Content>
        <Switch>
          <Route path="/" exact={true} component={Menu} />
          <Route path="/about" component={About} />
        </Switch>
      </Content>
      <Footer />
    </>
  )
}
