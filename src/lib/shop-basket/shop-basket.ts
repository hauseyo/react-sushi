import { createEvent, createStore } from "effector"
interface IPayload {
  price: number
  name: string
  quantity: number
  img: string
}
interface IItem {
  [key: string]: IPayload
}

// Events
export const updateBasket = createEvent<IPayload>()

// Stores
export const $shopBasket = createStore<IItem>({}).on(
  updateBasket,
  (state, payload) => ({
    ...state,
    [payload.name]: { ...payload, quantity: payload.quantity },
  })
)

$shopBasket.watch((s) => console.log("watcher", s))
