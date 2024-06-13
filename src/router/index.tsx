import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Modal } from 'antd'
import { cloneDeep } from 'lodash'

// import { dig } from '@/utils'
import RequireLogin from '@/components/Access/RequireLogin'
import NotRequireLogin from '@/components/Access/NotRequireLogin'
import NoFoundPage from '@/pages/error-page/no-found-page'
import { dig } from '@/utils/utils'

import {
  asyncRouterConfig,
  constantRouterConfig,
  type RouterItem,
} from './routerConfig'

export type RouterConfigTreeItem = {
  key: string
  path: string
  label: string
  title: string
  children?: RouterConfigTreeItem[]
  [key: string]: any
}

export const history = createBrowserHistory()

const generateRouteFromConfig = (config: RouterItem[]): ReactNode[] => {
  const loop = (rc: RouterItem[]): ReactNode[] => {
    return rc.map((r: RouterItem) => {
      const { component: Component } = r
      return (
        <Route element={<Component />} key={r.path} path={r.path}>
          {r.children && r.children.length > 0 ? loop(r.children) : null}
        </Route>
      )
    })
  }
  return loop(config)
}

export const createRouterConfigTree = (
  routerConfig: RouterItem[],
  filterKey?: string,
): RouterConfigTreeItem[] => {
  const loop = (
    _routerConfig: RouterItem[],
    parentPath = '',
  ): RouterConfigTreeItem[] => {
    if (!_routerConfig) {
      return []
    }
    return _routerConfig
      .filter((item) =>
        filterKey ? !item[filterKey as keyof typeof item] : true,
      )
      .map(({ path, name, children, redirect }: RouterItem) => {
        const isTopLevel = parentPath === ''
        const _path: string = isTopLevel ? `${path}` : `${parentPath}/${path}`

        return {
          key: _path,
          path: _path,
          label: name,
          title: name,
          redirect,
          children:
            children?.length &&
            children?.some((i) =>
              filterKey ? !i[filterKey as keyof typeof i] : true,
            )
              ? loop(children, _path)
              : undefined,
        }
      })
  }
  return loop(routerConfig)
}

export const getFullRoutePath = (pathname: string, withCurrent = false) => {
  const tree = createRouterConfigTree([
    ...constantRouterConfig,
    ...asyncRouterConfig,
  ])
  const flattenArr = dig(tree)
  const cur = flattenArr.find((item) => item.path === pathname)
  if (cur) {
    return withCurrent
      ? [
          {
            path: cur?.path,
            label: cur?.label,
            redirect: cur?.redirect,
          },
          ...cur.parent,
        ]
      : cur.parent
  } else {
    return []
  }
}

export const createRouter = (
  _constantRouterConfig: RouterItem[],
  _accessedRouteConfig: RouterItem[],
) => {
  const constantRoutes = generateRouteFromConfig(_constantRouterConfig)
  const asyncRoutes = generateRouteFromConfig(_accessedRouteConfig)
  console.log('constantRoutes', constantRoutes, 'asyncRoutes', asyncRoutes)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NotRequireLogin />}>{constantRoutes}</Route>
        <Route element={<RequireLogin />}>
          {asyncRoutes}
          <Route element={<NoFoundPage />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// 路由切换,弹框清除
history.listen(() => {
  Modal.destroyAll()
})
