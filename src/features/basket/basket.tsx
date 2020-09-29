import React, { FC, useState } from "react"
import { useStore } from "effector-react"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Modal } from "antd"
import { MyButton, Gist } from "ui"
import { $totalPrice } from "lib/shop-basket"

export const Basket: FC = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false)
  const price = useStore($totalPrice)

  return (
    <>
      <MyButton
        onClick={() => setModalOpened(!modalOpened)}
        text={`${price.toFixed(2)} руб.`}
        type="primary"
        size="large"
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
        <Gist gist="К оплате" value={`${price.toFixed(2)} руб.`} />
      </Modal>
    </>
  )
}
