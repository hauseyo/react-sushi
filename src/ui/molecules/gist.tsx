import React, { FC } from "react"

type Props = {
  gist: string | JSX.Element
  value: string
}

export const Gist: FC<Props> = ({ gist, value }) => {
  return (
    <p>
      <span style={{ color: "#EC5450", fontWeight: "bold", marginRight: 10 }}>
        {gist}:&nbsp;
      </span>
      <b>{value}</b>
    </p>
  )
}
