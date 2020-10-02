import React, { FC } from "react"
import { Typography } from "antd"

const { Title } = Typography

interface props {
  text: string
  level: 1 | 2 | 3 | 4 | 5
}
export const MyTitle: FC<props> = ({ text, level }) => {
  return (
    <Title level={level} style={{ color: "#EC5450" }}>
      {text}
    </Title>
  )
}
