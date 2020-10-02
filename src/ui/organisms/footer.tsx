import React, { FC } from "react"
import { Gist } from "ui/molecules"

export const Footer: FC = () => {
  return (
    <footer style={{ maxWidth: 1200, margin: "0 auto", marginTop: 30 }}>
      <Gist gist={<i className="fas fa-user-edit" />} value="ХО" />
      <Gist gist={<i className="fab fa-telegram-plane" />} value="@hauseyo" />
      <Gist gist={<i className="fas fa-phone" />} value="+375 44 455 09 23" />
      <Gist
        gist={<i className="fas fa-at" />}
        value="ho.thachngu3n@gmail.com"
      />
    </footer>
  )
}
