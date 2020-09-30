import React, { FC, useState } from "react"
import { useStore } from "effector-react"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { MyButton, Gist, MyModal, CardImg } from "ui"
import { $totalPrice, $filteredBasket } from "lib/shop-basket"
import cls from "./style.module.css"

export const Basket: FC = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false)
  const price = useStore($totalPrice)
  const basket = useStore($filteredBasket)

  console.log(basket)

  const renderDishes = () => {
    return Object.keys(basket).map(el => {
      const { img } = basket[el]
      return (
        <div key={img} className={cls.bcad}>
          <CardImg src={img} />
        </div>
      )
    })
  }

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
      <MyModal
        title={
          <>
            <ShoppingCartOutlined />
            &nbsp;Корзина
          </>
        }
        visible={modalOpened}
        onCancel={() => setModalOpened(false)}
      >
        {renderDishes()}
        <Gist gist="К оплате" value={`${price.toFixed(2)} руб.`} />
      </MyModal>
    </>
  )
}
