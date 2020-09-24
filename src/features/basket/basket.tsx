import React, { FC, useState } from "react"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Modal } from "antd"
import { MyButton } from "ui"

export const Basket: FC = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false)

  return (
    <>
      <MyButton
        onClick={() => setModalOpened(!modalOpened)}
        text="23 руб."
        type="primary"
        style={{
          position: "fixed",
          bottom: "10%",
          right: "10%",
          fontSize: "1rem",
          fontWeight: 600,
        }}
        icon={<ShoppingCartOutlined />}
      />
      <Modal
        title="Корзина"
        visible={modalOpened}
        footer={[
          <MyButton
            key="1"
            type="primary"
            onClick={() => setModalOpened(false)}
            text="Закрыть"
          />,
        ]}
        onCancel={() => setModalOpened(false)}
      >
        л
      </Modal>
    </>
  )
}
