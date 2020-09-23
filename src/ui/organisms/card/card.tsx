import React, { FC } from "react"
import { Card } from "antd"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"
import Meta from "antd/lib/card/Meta"
import cls from "./style.module.css"
import { MyButton, MyTitle } from "ui"

interface props {
  src: string
  title: string
  price: number
  quantity?: number
}

export const MyCard: FC<props> = ({ src, title, price, quantity }) => {
  return (
    <Card
      className={cls.card}
      cover={
        <img
          src={`${process.env.PUBLIC_URL}/assets/dishes/${src}.png`}
          alt="sushi"
        />
      }
      actions={[
        <MyButton icon={<MinusOutlined />} />,
        <span>{quantity || ""}</span>,
        <MyButton icon={<PlusOutlined />} />,
      ]}
    >
      <Meta
        title={<MyTitle level={3} text={title} />}
        description={
          <div className={cls.description}>
            <span>1 шт.</span> <span>{price}</span>
          </div>
        }
      />
    </Card>
  )
}
