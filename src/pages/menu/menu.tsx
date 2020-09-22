import React, { FC } from "react"
import { Tabs } from "antd"
import { TabTitle } from "ui"

const { TabPane } = Tabs

export const Menu: FC = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab={<TabTitle src="nigiri" title="Нигири" />} key="1">
        kj
      </TabPane>
      <TabPane tab={<TabTitle src="gunkani" title="Гунканы" />} key="2">
        kj
      </TabPane>
      <TabPane tab={<TabTitle src="maki" title="Маки" />} key="3">
        kj
      </TabPane>
      <TabPane tab={<TabTitle src="set" title="Сеты" />} key="4">
        kj
      </TabPane>
    </Tabs>
  )
}
