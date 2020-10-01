import { createEffect, createEvent, createStore } from "effector"
import { db } from "fb.config"

interface IList {
  [key: string]: {
    username: string
    email: string
    area: string
  }
}

// Effects
export const fetchListFx = createEffect(() =>
  db.ref().on("value", snapshot => getList(snapshot.val()))
)

// Events
const getList = createEvent<IList>()

// Stores
export const $reviewList = createStore<IList>({}).on(
  getList,
  (prev, payload) => ({ ...prev, ...payload })
)

$reviewList.watch(s => console.log(s))
