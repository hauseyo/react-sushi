import { createEvent, createStore } from "effector"

interface IItem {
  price: number
  name: string
  quantity: number
  img: string
}

// Events
export const updateBasket = createEvent<IItem>()

// Stores
export const $shopBasket = createStore<IItem[]>([]).on(
  updateBasket,
  (state, payload) => {
    if (state.length === 0) {
      return [...state, payload]
    }

    const qwe = state.forEach((el, id) => {
      console.log(el)
      if (el.name === payload.name) el.quantity = payload.quantity
      return [...state]
    })
    console.log(qwe)

    return qwe
  }
)

$shopBasket.watch((s) => console.log("watcher", s))
