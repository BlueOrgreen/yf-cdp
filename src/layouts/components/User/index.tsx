import { Avatar, App, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
// import { SvgIcon } from '@mango-kit/components'

import { useUserStore } from '@/store'
import { SvgIcon } from '@/components/SvgIcon'

const User: FC = () => {
  const { modal } = App.useApp()
  const {
    userInfo: { name, images },
    logout,
  } = useUserStore()

  return (
    <div className="flex h-10 items-center justify-between px-2">
      <Avatar
        alt="avatar"
        className="mr-3"
        icon={<UserOutlined />}
        size={40}
        src={images}
      />
      <div className="flex h-10 flex-col justify-between leading-normal text-white">
        <Typography.Text
          className="w-20 text-sm text-white"
          ellipsis={{ tooltip: name }}
        >
          {name}
        </Typography.Text>
        <div className="w-20 text-xs">当前账号</div>
      </div>
      <div
        className="flex h-10 w-10 cursor-pointer items-center justify-center text-white"
        onClick={() => {
          modal.confirm({
            content: `您确认要退出当前帐号？`,
            icon: null,
            width: 480,
            centered: true,
            title: `退出登录`,
            onOk: async () => {
              logout()
              return Promise.resolve()
            },
          })
        }}
      >
        <SvgIcon className="text-lg" iconClass="exit" />
      </div>
    </div>
  )
}

export default User
