import React from "react"
import { Button } from "antd"

interface IProps {
  text?: string
  icon?: JSX.Element
}

export const MyButton = ({ text, icon }: IProps) => {
  return <Button icon={icon}>{text}</Button>
}
