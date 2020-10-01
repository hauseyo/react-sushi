import React, { FC, useEffect } from "react"
import { useStore } from "effector-react"
import { Comment } from "antd"
import { fetchListFx, $reviewList } from "../model/list"
import cls from "./style.module.css"

export const ReviewList: FC = () => {
  const list = useStore($reviewList)

  useEffect(() => {
    fetchListFx()
  }, [])

  return (
    <>
      {Object.keys(list)?.map(key => {
        const { username, area, date } = list[key]
        return (
          <Comment
            author={<span className={cls.author}>{username}</span>}
            content={area}
            datetime={<span className={cls.date}>{date}</span>}
          />
        )
      })}
    </>
  )
}
