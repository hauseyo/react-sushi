import React, { FC } from "react"
import { NavLink } from "react-router-dom"

export const Navigation: FC = () => {
  return (
    <>
      <NavLink to="/">Меню</NavLink>
      <NavLink to="/reviews">Отзывы</NavLink>
    </>
  )
}
