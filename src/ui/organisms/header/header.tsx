import React, { FC } from "react"
import { NavLink } from "react-router-dom"
import cls from "./style.module.css"

export const Header: FC = ({ children }) => {
  return (
    <header className={cls.header}>
      <NavLink to="/">
        <img
          src={process.env.PUBLIC_URL + "/assets/logo/sushi-icon.png"}
          alt="Logo"
        />
        React
        <span>Sushi</span>
      </NavLink>
      <div className={cls.children}>{children}</div>
    </header>
  )
}
