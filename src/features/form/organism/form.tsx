import React, { FC } from "react"
import { Input, Form, Button } from "antd"
import { MyTitle } from "ui"
import { IForm } from "../types"
import { getFormValues } from "../model/formmodel"

export const MyForm: FC = () => {
  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 20 },
  }

  const onSubmit = (values: IForm) => {
    getFormValues(values)
  }

  return (
    <Form {...layout} onFinish={onSubmit}>
      <MyTitle text="Оставить отзыв" level={2} />
      <span>Ваше имя</span>
      <Form.Item
        name="username"
        rules={[
          { required: true, message: "Пожалуйста, введите корректное имя!" },
        ]}
      >
        <Input />
      </Form.Item>
      <span>Ваш е-мейл</span>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Пожалуйста, введите корректный е-мейл!" },
        ]}
      >
        <Input />
      </Form.Item>
      <span>Текс отзыва</span>
      <Form.Item
        name="area"
        rules={[{ required: true, message: "Пожалуйста, введите текст!" }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  )
}
