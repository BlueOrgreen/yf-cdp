import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Breadcrumb as AntBreadcrumb } from 'antd'

import AntdSvgIcon from '@/components/AntdSvgIcon'
import { getFullRoutePath } from '@/router'

export type BreadcrumbProps = {
  items?: { label: string; path: string; redirect?: string }[]
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items = [] }) => {
  const location = useLocation()
  const { pathname, search } = location

  const autoGenerateItems = useMemo(
    () => getFullRoutePath(pathname, true).reverse(),
    [pathname],
  )

  const generateTitle = (
    its: {
      path: string
      label: string
      redirect?: string
    }[],
    {
      path,
      label,
      redirect,
    }: {
      path: string
      label: string
      redirect?: string
    },
    index: number,
  ) => {
    if (index !== its.length - 1) {
      return (
        <Link className="current" to={redirect ? redirect : `${path}${search}`}>
          {label}
        </Link>
      )
    } else {
      return <span>{label}</span>
    }
  }

  const breadcrumbItems =
    items?.length > 0
      ? items.map((item, index) => ({
          key: item.path,
          title: generateTitle(items, item, index),
        }))
      : autoGenerateItems?.length > 1
        ? autoGenerateItems.map((item, index) => ({
            key: item.path,
            title: generateTitle(autoGenerateItems, item, index),
          }))
        : []

  return (
    <div className="absolute left-0 top-0 z-10 flex h-[60px] items-center bg-transparent px-6">
      <AntBreadcrumb
        items={breadcrumbItems}
        separator={<AntdSvgIcon iconClass="breadcrumbSeparator" />}
      />
    </div>
  )
}

export default Breadcrumb
