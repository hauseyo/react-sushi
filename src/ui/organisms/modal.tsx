import React, { FC } from "react"
import { Modal } from "antd"
import { MyButton } from "ui"

type Props = {
  title: string | JSX.Element
  width?: number
  visible: boolean
  onCancel: () => void
  footer?: JSX.Element
  children: JSX.Element[] | JSX.Element | (JSX.Element[] | JSX.Element)[]
}

export const MyModal: FC<Props> = ({
  title,
  visible,
  onCancel,
  width,
  footer,
  children,
}) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={onCancel}
      width={width}
      footer={[
        <MyButton key="1" text="Закрыть" onClick={onCancel} type="primary" />,
        footer,
      ]}
    >
      {children}
    </Modal>
  )
}
