import React, { FC } from "react"
import { Tabs } from "antd"
import { TabTitle } from "ui"
import { Cards } from "features/card-dishes"
import * as nigiriDB from "db/nigiri.json"
import * as gunkaniDB from "db/gunkani.json"
import { Basket } from "features"

const nigiri = (nigiriDB as any).default
const gunkani = (gunkaniDB as any).default

const { TabPane } = Tabs

export const Menu: FC = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab={<TabTitle src="nigiri" title="Нигири" />} key="1">
          <Cards db={nigiri} />
        </TabPane>
        <TabPane tab={<TabTitle src="gunkani" title="Гунканы" />} key="2">
          <Cards db={gunkani} />
        </TabPane>
        <TabPane tab={<TabTitle src="maki" title="Маки" />} key="3">
          kj
        </TabPane>
        <TabPane tab={<TabTitle src="set" title="Сеты" />} key="4">
          kj
        </TabPane>
      </Tabs>
      <Basket />
    </>
  )
}
