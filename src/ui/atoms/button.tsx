import React, { CSSProperties } from "react"
import { Button } from "antd"

interface IProps {
  text?: string
  icon?: JSX.Element
  style?: CSSProperties
  type?: "primary" | "ghost"
  size?: "large" | "small"
  onClick: () => void
}

export const MyButton = ({
  text,
  icon,
  type,
  style,
  size,
  onClick,
}: IProps) => {
  return (
    <Button icon={icon} type={type} style={style} size={size} onClick={onClick}>
      {text}
    </Button>
  )
}
