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
    [payload.name]: { ...payload },
  })
)

const $filteredBasket = $shopBasket.map(obj => {
  const filteredObj: IItem = {}

  for (let key in obj) {
    if (obj[key].quantity > 0) filteredObj[key] = obj[key]
  }

  return filteredObj
})

$filteredBasket.watch(s => console.log("filtered", s))
