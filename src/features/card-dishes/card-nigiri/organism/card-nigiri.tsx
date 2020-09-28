import React, { FC } from "react"
import * as db from "db/nigiri.json"
import { CardContent, MyCard } from "ui"
// import { useStore } from "effector-react"
import { updateBasket } from "lib/shop-basket"

type cardInfo = {
  name: string
  description: string
  img: string
  price: number
  weight: number
  protein: number
  fat: number
  carb: number
  cal: number
}

export const CardNigiri: FC = () => {
  const data = (db as any).default
  // const basket = useStore($shopBasket)

  return (
    <CardContent>
      {data.map(
        ({
          name,
          description,
          img,
          price,
          weight,
          protein,
          fat,
          carb,
          cal,
        }: cardInfo) => {
          return (
            <MyCard
              key={name + img}
              src={`/nigiri/${img}`}
              title={name}
              price={price}
              description={description}
              weight={weight}
              protein={protein}
              fat={fat}
              carb={carb}
              cal={cal}
              quantity={0}
              increase={() => {
                updateBasket({ price, name, img, quantity: 50 })
              }}
              dicrease={() => {
                updateBasket({ price, name, img, quantity: 30 })
              }}
            />
          )
        }
      )}
    </CardContent>
  )
}
