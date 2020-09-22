import React, { FC } from "react"
import { NavLink } from "react-router-dom"
import { Menu } from "antd"

export const Navigation: FC = () => {
  return (
    <Menu
      mode="horizontal"
      style={{ borderBottom: "none", fontSize: "1.2rem" }}
    >
      <Menu.Item>
        <NavLink to="/">Меню</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/reviews">Отзывы</NavLink>
      </Menu.Item>
    </Menu>
  )
}
