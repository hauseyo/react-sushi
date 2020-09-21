import React, { FC } from "react"
import { NavLink } from "react-router-dom"

export const Header: FC = ({ children }) => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <NavLink to="/">
        <span>React</span>
        <span>Sushi</span>
      </NavLink>
      {children}
    </header>
  )
}
