import React, { FC } from "react"
import { CardContent, MyCard } from "ui"

export const CardNigiri: FC = () => {
  return (
    <CardContent>
      <MyCard
        src="/nigiri/unagi_new"
        title="Тунец"
        price={3.15}
        description="huge"
      />
      <MyCard
        src="/nigiri/unagi_new"
        title="Тунец"
        price={3.15}
        description="huge"
      />
    </CardContent>
  )
}
