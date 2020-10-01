import React, { FC } from "react"
import { MyTitle } from "ui"
import { MyForm } from "features"
import cls from "./style.module.css"

export const Reviews: FC = () => {
  return (
    <div className={cls.reviews}>
      <MyForm />
      <div>
        <MyTitle text="Отзывы" level={2} />
      </div>
    </div>
  )
}
