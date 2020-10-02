import { createEffect, createEvent, createStore, guard, Store } from "effector"
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

// Effects
const fxSaveBasketToLS = createEffect((payload: IItem) =>
  localStorage.setItem("basket", JSON.stringify(payload))
)

export const fxGetBasketFromLS = createEffect(() => {
  const basket = localStorage.getItem("basket")
  if (basket) return JSON.parse(basket)
})

// Stores
export const $shopBasket = createStore<IItem>({})
  .on(updateBasket, (state, payload) => ({
    ...state,
    [payload.name]: { ...payload },
  }))
  .on(fxGetBasketFromLS.doneData, (_, payload) => ({ ...payload }))

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

guard({
  source: $filteredBasket,
  filter: basket => (Object.keys(basket).length !== 0 ? true : false),
  target: fxSaveBasketToLS,
})
