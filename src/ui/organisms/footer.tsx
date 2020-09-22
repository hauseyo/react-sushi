import React, { FC } from "react"
import { Layout } from "antd"

export const Footer: FC = ({ children }) => {
  const { Footer } = Layout
  return <Footer>{children}</Footer>
}
