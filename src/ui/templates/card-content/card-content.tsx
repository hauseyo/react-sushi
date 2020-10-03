import React, { FC } from "react"
import cls from "./style.module.css"

export const CardContent: FC = ({ children }) => {
  return <div className={cls.ccontent}>{children}</div>
}
