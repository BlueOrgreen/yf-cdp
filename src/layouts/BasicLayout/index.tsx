import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import PageLoading from '@/components/PageLoading'

import Logo from '../components/Logo'
import { TopMenu, SideMenu } from '../components/Menu'
import Helmet from '../components/Helmet'
import User from '../components/User'
// import Breadcrumb from '../components/Breadcrumb'

const BasicLayout: FC = () => {
  return (
    <>
      <Helmet />
      <Layout className="flex h-screen w-screen flex-col overflow-hidden">
        <Layout.Header
          className="align-center flex h-[72px] w-full items-center justify-between bg-primary
        px-6"
        >
          <Logo />
          <TopMenu />
          <User />
        </Layout.Header>
        <Layout className="flex h-[calc(100vh-72px)] flex-none flex-row overflow-hidden">
          <SideMenu className="flex-none" />
          <Layout className="relative h-full flex-auto overflow-y-auto overflow-x-hidden">
            {/* <Breadcrumb /> */}
            111
            {/* <Suspense fallback={<PageLoading spinning />}>
              <Outlet />
            </Suspense> */}
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}

export default BasicLayout
