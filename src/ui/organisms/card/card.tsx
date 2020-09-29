import React, { FC, useState } from "react"
import { Card } from "antd"
import { PlusOutlined, MinusOutlined, InfoOutlined } from "@ant-design/icons"
import Meta from "antd/lib/card/Meta"
import cls from "./style.module.css"
import { MyButton } from "ui"
import { MyModal } from "../modal/modal"
import { MyTitle } from "ui/atoms"
import { Gist } from "ui/molecules/gist/gist"
import { CardImg } from "ui/atoms/card-img"

interface props {
  src: string
  title: string
  description: string
  price: number
  quantity?: number
  weight: number
  protein: number
  fat: number
  carb: number
  cal: number
  increase: () => void
  dicrease: () => void
}

export const MyCard: FC<props> = ({
  src,
  title,
  price,
  quantity,
  description,
  weight,
  protein,
  fat,
  carb,
  cal,
  increase,
  dicrease,
}) => {
  const [modal, setModal] = useState<boolean>(false)

  return (
    <>
      <Card
        className={cls.card}
        cover={<CardImg src={src} onClick={() => setModal(true)} />}
        actions={[
          <MyButton
            icon={<MinusOutlined />}
            onClick={dicrease}
            type="primary"
          />,
          quantity || "",
          <MyButton
            icon={<PlusOutlined />}
            onClick={increase}
            type="primary"
          />,
          <MyButton icon={<InfoOutlined />} onClick={() => setModal(true)} />,
        ]}
      >
        <Meta
          title={title}
          description={
            <div className={cls.description}>
              <span>1 шт.</span> <span>{price} руб.</span>
            </div>
          }
        />
      </Card>
      <MyModal
        title="Дополнительная информация"
        visible={modal}
        onCancel={() => setModal(false)}
      >
        <MyTitle text={title} level={3} />
        <Gist gist="Состав" value={description} />
        <Gist gist="Вес" value={`${weight} г.`} />
        <Gist gist="Белки" value={`${protein} г.`} />
        <Gist gist="Жиры" value={`${fat} г.`} />
        <Gist gist="Углеводы" value={`${carb} г.`} />
        <Gist gist="Калории" value={`${cal} кал.`} />
        <Gist gist="Цена" value={`${price} руб.`} />
      </MyModal>
    </>
  )
}
