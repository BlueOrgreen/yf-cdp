import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Select } from 'antd'
import cx from 'classnames'

import { useUserStore } from '@/store'

export const TopMenu: FC = () => {
  const navigate = useNavigate()
  const menuConfig = useUserStore((state) => state.menuConfig)

  const { pathname } = useLocation()

  return (
    <div className="flex bg-primary">
      {menuConfig?.map((i) => {
        const active = pathname.startsWith(i?.key)
        return (
          <div
            className={`mr-12 flex min-w-[136px] cursor-pointer items-center text-white ${active ? 'opacity-100' : 'opacity-70'}`}
            key={i?.key}
            onClick={() => {
              navigate(i?.children?.[0]?.children?.[0]?.key || i?.key)
            }}
          >
            <img
              alt={i?.label}
              className="mr-2 text-xl text-white"
              src={i?.icon}
            />
            <div className="mr-2 text-xl text-white">{i?.label}</div>
          </div>
        )
      })}
    </div>
  )
}

export const SideMenu: FC<{
  className?: string
}> = ({ className }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const menuConfig = useUserStore((state) => state.menuConfig)

  const subMenuConfig =
    menuConfig?.find((i) => pathname.startsWith(i?.key))?.children ?? []

  const subChildrenMenuConfig =
    subMenuConfig?.find((i) => pathname.startsWith(i?.key))?.children ?? []

  return (
    <div
      className={`w-[104px] cursor-pointer overflow-hidden border-r border-[#E5E6EB] bg-[#EFF0FD] ${className}`}
    >
      <div className="flex h-[60px] w-full items-center justify-center">
        <Select
          className="w-full text-center"
          defaultValue={subChildrenMenuConfig?.[0]?.key}
          options={
            subChildrenMenuConfig?.map(({ label, key }) => ({
              label,
              value: key,
            })) ?? []
          }
          variant="borderless"
          onChange={(v) => {
            navigate(v)
          }}
        />
      </div>
      <div className="border-t border-[#DFE1FA] py-6">
        {subMenuConfig?.map((i) => {
          const active = pathname.startsWith(i?.key)
          return (
            <div
              className={`flex h-[86px] w-full flex-col items-center justify-center ${active ? 'bg-[#ced1fa]' : ''}`}
              key={i?.key}
              onClick={() => {
                navigate(i?.children?.[0]?.key || i?.key)
              }}
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${active ? 'bg-primary' : 'bg-[#C9CDD4]'}`}
              >
                <img
                  alt={i?.label}
                  className="block h-[22px] w-[22px]"
                  src={i?.icon}
                />
              </div>

              <div
                className={`mt-1 text-center text-xs  ${active ? 'text-[#1D2129]' : 'text-[#4E5969]'}`}
              >
                {i?.label}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
