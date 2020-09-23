import React, { FC } from "react"
import { Card } from "antd"
import cls from "./style.module.css"
import Meta from "antd/lib/card/Meta"

interface props {
  src: string
  title: string
  price: number
  description: string
}

export const MyCard: FC<props> = ({ src, title }) => {
  return (
    <Card
      className={cls.card}
      cover={
        <img
          src={`${process.env.PUBLIC_URL}/assets/dishes/${src}.png`}
          alt="sushi"
        />
      }
    >
      <Meta title={title} />
    </Card>
  )
}
