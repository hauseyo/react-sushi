import { createEffect, createEvent, restore, sample } from "effector"
import { IForm } from "../types"

// Events
export const getFormValues = createEvent<IForm>()

// Effects
const fxSendReviewToDB = createEffect((values: IForm) => {
  console.log(values)
})

// Stores
const $form = restore(getFormValues, null)

// $form.watch(s => console.log(s))

sample({
  source: $form,
  target: fxSendReviewToDB,
})
