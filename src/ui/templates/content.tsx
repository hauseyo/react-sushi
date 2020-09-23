import React, { FC } from "react"

export const Content: FC = ({ children }) => {
  return <div style={{ maxWidth: "1200px", margin: "0 auto" }}>{children}</div>
}
