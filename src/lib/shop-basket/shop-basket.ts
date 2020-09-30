import { createEvent, createStore, Store } from "effector"
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
    [payload.name]: { ...payload },
  })
)

export const $filteredBasket: Store<IItem> = $shopBasket.map(obj => {
  const filteredObj: IItem = {}

  for (let key in obj) {
    if (obj[key].quantity > 0) filteredObj[key] = obj[key]
  }

  return filteredObj
})

export const $totalPrice: Store<number> = $filteredBasket.map(obj => {
  let total = 0

  for (let key in obj) {
    total += obj[key].quantity * obj[key].price
  }

  return total
})
