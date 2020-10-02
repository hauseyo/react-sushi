import { createEffect, createEvent, restore, sample } from "effector"
import { db } from "fb.config"
import { IForm } from "../types"

// Events
export const getFormValues = createEvent<IForm>()

// Effects
const fxSaveReviewToDB = createEffect((values: IForm) =>
  db.ref(`${(Math.random() * 100000000).toFixed()}`).set({
    ...values,
    date: new Date().toLocaleDateString("ru"),
  })
)

// Stores
const $form = restore(getFormValues, null)

// $form.watch(s => console.log(s))

sample({
  source: $form,
  target: fxSaveReviewToDB,
})
