import React, { FC } from "react"

export const CardContent: FC = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {children}
    </div>
  )
}
