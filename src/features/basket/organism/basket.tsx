import React, { FC, useState } from "react"
import { useStore } from "effector-react"
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons"
import { MyButton, Gist, MyModal, CardImg } from "ui"
import { $totalPrice, $filteredBasket, updateBasket } from "lib/shop-basket"
import cls from "./style.module.css"
import { Counter } from "../molecule/counter"

export const Basket: FC = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false)
  const price = useStore($totalPrice)
  const basket = useStore($filteredBasket)

  const renderDishes = () => {
    return Object.keys(basket).map(el => {
      const { img, name, quantity, price } = basket[el]

      return (
        <div key={img} className={cls.bcard}>
          <CardImg src={img} />
          <span>{name}</span>
          <Counter
            increase={() =>
              updateBasket({ img, name, price, quantity: quantity + 1 })
            }
            dicrease={() =>
              updateBasket({ img, name, price, quantity: quantity - 1 })
            }
            quantity={quantity}
          />
          <span>{(price * quantity).toFixed(2)} руб.</span>
          <MyButton
            icon={<DeleteOutlined />}
            onClick={() => updateBasket({ img, name, price, quantity: 0 })}
          />
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
        width={800}
        footer={
          !!Object.keys(basket).length && (
            <MyButton key="2" text="Заказать" onClick={() => {}} />
          )
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
