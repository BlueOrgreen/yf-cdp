import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, App as AntdApp } from 'antd'
import dayjs from 'dayjs'
import { HelmetProvider } from 'react-helmet-async'

import router, { createRouter } from './router'
import { asyncRouterConfig, constantRouterConfig } from './router/routerConfig'

import type { MessageInstance } from 'antd/es/message/interface'
import type { ModalStaticFunctions } from 'antd/es/modal/confirm'
import type { NotificationInstance } from 'antd/es/notification/interface'

let message: MessageInstance
let notification: NotificationInstance
let modal: Omit<ModalStaticFunctions, 'warn'>

// dayjs.locale('zh-cn') // 全局使用
dayjs.locale('zh-cn')

const App: FC = () => {
  // useAsyncEffect(async () => {
  //   await browserSupportDetecter()
  //   setIsBrowserSupportDetecterDone(true)

  //   console.log(
  //     `%c 构建时间：${process.env.REACT_APP_BUILD_TIME}`,
  //     'color: #bada55',
  //   )
  //   console.log(
  //     `%c REACT_APP_API_ENV：${process.env.REACT_APP_API_ENV}`,
  //     'color: #bada55',
  //   )
  //   console.log(
  //     `%c REACT_APP_MOCK：${process.env.REACT_APP_MOCK}`,
  //     'color: #bada55',
  //   )
  // }, [])

  return (
    <HelmetProvider>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 4,
            colorPrimary: '#6871F4',
            colorInfo: '#6871F4',
          },
        }}
      >
        <AntdApp>
          <FeedbackWrapper>
            {createRouter(constantRouterConfig, asyncRouterConfig)}
          </FeedbackWrapper>
        </AntdApp>
      </ConfigProvider>
    </HelmetProvider>
  )
}

export const FeedbackWrapper: FC<PropsWithChildren<any>> = ({ children }) => {
  const staticFunction = AntdApp.useApp()
  message = staticFunction.message
  modal = staticFunction.modal
  notification = staticFunction.notification
  return children
}

export { message, notification, modal }

export default App
