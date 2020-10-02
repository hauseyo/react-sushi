import React, { FC } from "react"

interface IProps {
  src: string
  onClick?: () => void
}

export const CardImg: FC<IProps> = ({ src, onClick }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/assets/dishes/${src}.png`}
      alt="sushi"
      onClick={onClick}
    />
  )
}
