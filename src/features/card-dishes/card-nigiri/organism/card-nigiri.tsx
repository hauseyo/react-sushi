import React, { FC } from "react"
import * as db from "db/nigiri.json"
import { CardContent, MyCard } from "ui"

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
            />
          )
        }
      )}
    </CardContent>
  )
}
