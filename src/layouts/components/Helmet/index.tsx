import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet as ReactHelmetAsync } from 'react-helmet-async'

import { getFullRoutePath } from '@/router'

const Helmet: FC = () => {
  const { pathname } = useLocation()

  const pageTitle = useMemo(() => {
    const items = getFullRoutePath(pathname, true).reverse()
    return `${items?.[items.length - 1]?.label} - 客户数据平台`
  }, [pathname])

  return (
    <ReactHelmetAsync>
      <title>{pageTitle}</title>
      <meta content={pageTitle} property="og:title" />
    </ReactHelmetAsync>
  )
}

export default Helmet
