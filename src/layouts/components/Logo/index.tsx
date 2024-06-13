import { useNavigate } from 'react-router-dom'

import { SvgIcon } from '@/components/SvgIcon'
// import { SvgIcon } from '@mango-kit/components'

const Logo: FC = () => {
  const navigate = useNavigate()
  return (
    <div
      className="flex h-[48px] w-[240px] cursor-pointer items-center justify-center text-xl text-white"
      onClick={() => {
        navigate('/cdp/data-asset/data-filter/user/list')
      }}
    >
      <SvgIcon className="block h-full w-full" iconClass="logo" />
    </div>
  )
}

export default Logo
