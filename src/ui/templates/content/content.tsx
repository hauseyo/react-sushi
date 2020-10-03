import React, { FC } from "react"
import cls from "./style.module.css"

export const Content: FC = ({ children }) => {
  return <div className={cls.content}>{children}</div>
}
