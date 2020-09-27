import React, { FC } from "react"
import { Modal } from "antd"
import { MyButton } from "ui/atoms"

type Props = {
  title: string
  visible: boolean
  onCancel: () => void
  children: JSX.Element[] | JSX.Element
}

export const MyModal: FC<Props> = ({ title, visible, onCancel, children }) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={onCancel}
      footer={[<MyButton text="Закрыть" onClick={onCancel} />]}
    >
      {children}
    </Modal>
  )
}
