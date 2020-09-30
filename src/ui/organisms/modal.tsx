import React, { FC } from "react"
import { Modal } from "antd"
import { MyButton } from "ui"

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
      footer={[
        <MyButton key="1" text="Закрыть" onClick={onCancel} type="primary" />,
      ]}
    >
      {children}
    </Modal>
  )
}
