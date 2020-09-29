import React, { FC } from "react"
import { CardContent, MyCard } from "ui"
import { useStore } from "effector-react"
import { $shopBasket, updateBasket } from "lib/shop-basket"

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

interface IProps {
  db: any
  imgDir: string
}

export const Cards: FC<IProps> = ({ db, imgDir }) => {
  const basket = useStore($shopBasket)

  return (
    <CardContent>
      {db.map(
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
              src={`${imgDir + img}`}
              title={name}
              price={price}
              description={description}
              weight={weight}
              protein={protein}
              fat={fat}
              carb={carb}
              cal={cal}
              quantity={basket[name]?.quantity || 0}
              increase={() => {
                updateBasket({
                  price,
                  name,
                  img,
                  quantity: basket[name]?.quantity + 1 || 1,
                })
              }}
              dicrease={() => {
                updateBasket({
                  price,
                  name,
                  img,
                  quantity: basket[name]?.quantity
                    ? basket[name].quantity - 1
                    : 0,
                })
              }}
            />
          )
        }
      )}
    </CardContent>
  )
}
