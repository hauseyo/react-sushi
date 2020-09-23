import React, { FC, useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu } from "antd"

export const Navigation: FC = () => {
  const [path, setPath] = useState<string>(window.location.pathname)

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[path]}
      style={{ borderBottom: "none", fontSize: "1.2rem" }}
      onClick={(e) => setPath(e.key.toString())}
    >
      <Menu.Item key="/">
        <NavLink to="/">Меню</NavLink>
      </Menu.Item>
      <Menu.Item key="/about">
        <NavLink to="/about">О нас</NavLink>
      </Menu.Item>
      <Menu.Item key="/reviews">
        <NavLink to="/reviews">Отзывы</NavLink>
      </Menu.Item>
    </Menu>
  )
}
