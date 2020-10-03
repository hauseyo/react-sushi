import React, { FC } from "react"
import { Gist } from "ui/molecules"
import cls from "./style.module.css"

export const Footer: FC = () => {
  return (
    <footer className={cls.footer}>
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
