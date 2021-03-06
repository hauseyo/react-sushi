import React, { FC, useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Menu } from "antd"

export const Navigation: FC = () => {
  const { pathname } = useLocation()
  const [path, setPath] = useState<string>(pathname)

  useEffect(() => setPath(pathname), [pathname])

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[path]}
      style={{ borderBottom: "none", fontSize: "1.2rem" }}
      onClick={e => setPath(e.key.toString())}
    >
      <Menu.Item key="/">
        <NavLink to="/">Меню</NavLink>
      </Menu.Item>
      <Menu.Item key="/about">
        <NavLink to="/about">О нас</NavLink>
      </Menu.Item>
      <Menu.Item key="/reviews" style={{ marginRight: 0 }}>
        <NavLink to="/reviews">Отзывы</NavLink>
      </Menu.Item>
    </Menu>
  )
}
