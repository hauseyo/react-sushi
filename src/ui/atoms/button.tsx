import React from "react"
import { Button } from "antd"

interface IProps {
  text: string
}

export const MyButton = ({ text }: IProps) => {
  return <Button>{text}</Button>
}
