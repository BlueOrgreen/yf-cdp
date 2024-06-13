import { Row, Col, Form, Input, Typography, App, Button } from 'antd'
// import { LoadableButton } from '@mango-kit/components'

// import * as API from '@/services/user'

const Page: FC = () => {
  const { message } = App.useApp()
  const [form] = Form.useForm()

  const handleFinish = async (values: any) => {
    // const { code, data } = await API.login(values)
    // if (code !== 0) {
    //   return false
    // }
    // const { token } = data
    message.success('登录成功')
    localStorage.setItem('token', 'token')
    form.resetFields()
    window.location.href =
      window.location.origin + '/cdp/data-asset/data-filter'
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Form form={form} onFinish={handleFinish}>
        <Typography.Title className="text-center" level={2}>
          本地登录
        </Typography.Title>
        <div>
          <Row gutter={64}>
            <Col span={24}>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入账号',
                  },
                ]}
              >
                <Input placeholder={'请输入账号'} allowClear />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码',
                  },
                ]}
              >
                <Input.Password maxLength={20} placeholder={'请输入密码'} />
              </Form.Item>
            </Col>
          </Row>
        </div>

        <div>
          <Button htmlType="submit" key="ok" size="large" type="primary" block>
            登录
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Page
