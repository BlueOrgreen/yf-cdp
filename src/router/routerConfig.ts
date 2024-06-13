import { lazy } from 'react'

import BasicLayout from '@/layouts/BasicLayout'
import BlankLayout from '@/layouts/BlankLayout'

export type RouterItem = {
  path: string
  name: string
  auth?: number | string
  redirect?: string
  hideInBreadcrumb?: boolean
  component?: any
  children?: RouterItem[]
}

export const constantRouterConfig: RouterItem[] = [
  {
    auth: '',
    path: '/cdp/user',
    name: '首页',
    component: BlankLayout,
    children: [
      {
        auth: '',
        path: 'login',
        name: '登录',
        component: lazy(() => import('@/pages/user/login')),
      },
    ],
  },
]

export const asyncRouterConfig: RouterItem[] = [
  {
    auth: '',
    path: '/cdp/data-asset',
    name: '数据资产',
    component: BasicLayout,
    redirect: '/cdp/data-asset/data-filter/user/list',
    children: [
      //   {
      //     auth: '数据资产-筛选',
      //     path: 'data-filter',
      //     name: '筛选',
      //     component: BlankLayout,
      //     redirect: '/cdp/data-asset/data-filter/user/list',
      //     children: [
      //       {
      //         auth: '数据资产-筛选-用户',
      //         path: 'user',
      //         name: '用户',
      //         component: BlankLayout,
      //         redirect: '/cdp/data-asset/data-filter/user/list',
      //         children: [
      //           {
      //             auth: '数据资产-筛选-用户',
      //             path: 'list',
      //             name: '列表',
      //             component: lazy(
      //               () => import('@/pages/data-asset/data-filter/user/list'),
      //             ),
      //           },
      //           {
      //             auth: '数据资产-筛选-用户',
      //             path: 'detail',
      //             name: '详情',
      //             component: lazy(
      //               () => import('@/pages/data-asset/data-filter/user/detail'),
      //             ),
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     auth: '数据资产-标签',
      //     path: 'label-management',
      //     name: '标签',
      //     component: BlankLayout,
      //     redirect: '/cdp/data-asset/label-management/user/list',
      //     children: [
      //       {
      //         auth: '数据资产-标签-用户',
      //         path: 'user',
      //         name: '用户',
      //         component: BlankLayout,
      //         redirect: '/cdp/data-asset/label-management/user/list',
      //         children: [
      //           {
      //             auth: '数据资产-标签-用户',
      //             path: 'list',
      //             name: '列表',
      //             // component: lazy(
      //             //   () => import('@/pages/data-asset/label-management/user/list'),
      //             // ),
      //           },
      //           {
      //             auth: '数据资产-标签-用户',
      //             path: 'detail',
      //             name: '详情',
      //             component: lazy(
      //               () =>
      //                 import('@/pages/data-asset/label-management/user/detail'),
      //             ),
      //           },
      //         ],
      //       },
      //     ],
      //   },
      {
        auth: '数据资产-群组',
        path: 'group-management',
        name: '群组',
        component: BlankLayout,
        redirect: '/cdp/data-asset/group-management/user/list',
        children: [
          {
            auth: '数据资产-群组-用户',
            path: 'user',
            name: '用户',
            component: BlankLayout,
            redirect: '/cdp/data-asset/group-management/user/list',
            children: [
              {
                auth: '数据资产-群组-用户',
                path: 'list',
                name: '列表',
                component: lazy(
                  () => import('@/pages/data-asset/group-management/user'),
                ),
              },
              {
                auth: '数据资产-群组-用户',
                path: 'detail',
                name: '详情',
                component: lazy(
                  () =>
                    import('@/pages/data-asset/group-management/user/detail'),
                ),
              },
            ],
          },
        ],
      },
      {
        auth: '数据资产-基础数据',
        path: 'base-data-management',
        name: '基础数据',
        component: BlankLayout,
        redirect: '/cdp/data-asset/base-data-management/user/list',
        children: [
          {
            auth: '数据资产-基础数据-用户',
            path: 'user',
            name: '用户',
            component: BlankLayout,
            redirect: '/cdp/data-asset/base-data-management/user/list',
            children: [
              {
                auth: '数据资产-基础数据-用户',
                path: 'list',
                name: '列表',
                component: lazy(
                  () =>
                    import('@/pages/data-asset/base-data-management/user/list'),
                ),
              },
            ],
          },
        ],
      },
      {
        auth: '',
        path: 'workflow',
        name: '流程引擎',
        component: lazy(() => import('@/pages/data-asset/workflow/')),
      },
    ],
  },
  {
    auth: '',
    path: '/cdp/marketing-strategy',
    name: '营销策略',
    component: BasicLayout,
    children: [
      {
        auth: '营销策略',
        path: '',
        name: '营销策略',
        component: lazy(() => import('@/pages/marketing-strategy')),
      },
    ],
  },
  //   {
  //     auth: '',
  //     path: '/cdp/analytic-insight',
  //     name: '分析洞察',
  //     component: BasicLayout,
  //     children: [
  //       {
  //         auth: '营销策略',
  //         path: '',
  //         name: '分析洞察',
  //         component: lazy(() => import('@/pages/analytic-insight')),
  //       },
  //     ],
  //   },
]
