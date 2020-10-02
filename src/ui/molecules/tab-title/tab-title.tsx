import React from "react"
import cls from "./style.module.css"

type Props = {
  src: string
  title: string
}

export const TabTitle = ({ src, title }: Props) => {
  return (
    <div className={cls.title}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/menu/${src}.gif`}
        alt="tab-title"
      />
      <p>{title}</p>
    </div>
  )
}
