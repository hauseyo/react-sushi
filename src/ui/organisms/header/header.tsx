import React, { FC } from "react"
import { NavLink } from "react-router-dom"
import { Layout } from "antd"
import cls from "./style.module.css"

export const Header: FC = ({ children }) => {
  const { Header } = Layout
  return (
    <Header className={cls.header}>
      <NavLink to="/">
        <img
          src={process.env.PUBLIC_URL + "/assets/logo/sushi-icon.png"}
          alt="Logo"
        />
        React
        <span>Sushi</span>
      </NavLink>
      {children}
    </Header>
  )
}
