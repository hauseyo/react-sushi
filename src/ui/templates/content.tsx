import React, { FC } from "react"

export const Content: FC = ({ children }) => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "4.4rem" }}>
      {children}
    </div>
  )
}
