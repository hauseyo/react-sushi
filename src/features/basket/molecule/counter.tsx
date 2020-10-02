import React, { FC } from "react"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"
import { MyButton } from "ui"
import cls from "./style.module.css"

interface IProps {
  increase: () => void
  dicrease: () => void
  quantity: number
}

export const Counter: FC<IProps> = ({ increase, dicrease, quantity }) => {
  return (
    <div className={cls.counter}>
      <MyButton type="primary" onClick={dicrease} icon={<MinusOutlined />} />
      <span>{quantity}</span>
      <MyButton type="primary" onClick={increase} icon={<PlusOutlined />} />
    </div>
  )
}
