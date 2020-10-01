import React, { FC, useEffect } from "react"
// import { Comment } from "antd"
import { fetchListFx } from "../model/list"

export const ReviewList: FC = () => {
  useEffect(() => {
    fetchListFx()
  }, [])

  return <>{/* <Comment /> */}</>
}
