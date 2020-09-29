import React, { FC } from "react"

type Props = {
  gist: string
  value: string
}

export const Gist: FC<Props> = ({ gist, value }) => {
  return (
    <p>
      <span
        style={{ color: "#EC5450", fontWeight: "bold" }}
      >{`${gist}: `}</span>
      <b>{value}</b>
    </p>
  )
}
