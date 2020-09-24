import React, { CSSProperties } from "react"
import { Button } from "antd"

interface IProps {
  text?: string
  icon?: JSX.Element
  style?: CSSProperties
  type?: "primary" | "ghost"
  onClick: () => void
}

export const MyButton = ({ text, icon, type, style, onClick }: IProps) => {
  return (
    <Button icon={icon} type={type} style={style} onClick={onClick}>
      {text}
    </Button>
  )
}
