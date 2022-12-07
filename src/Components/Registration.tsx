import { Form, Input, Checkbox, Button } from 'antd'
import '../Styles/cadastro.css'

export const Registration = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  return (
    <Form
      className="form-register"
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <div className="create-account">Crie Sua Conta</div>
      <div className="register-container">
        <div>
          <label>Nome</label>
          <Form.Item name="Nome">
            <Input className="cad-input" required />
          </Form.Item>
        </div>

        <div>
          <label>Email</label>
          <Form.Item
            name="Email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              }
            ]}
          >
            <Input className="cad-input" required />
          </Form.Item>
        </div>

        <div>
          <label>CPF</label>
          <Form.Item name="CPF">
            <Input className="cad-input" required />
          </Form.Item>
        </div>

        <div>
          <label>Identificação Institucional</label>
          <Form.Item name="Identificação">
            <Input className="cad-input" required />
          </Form.Item>
        </div>

        <div>
          <label>Senha</label>
          <Form.Item name="Senha" hasFeedback>
            <Input.Password className="cad-input" required />
          </Form.Item>
        </div>

        <div>
          <label>Confirmação de Senha</label>
          <Form.Item
            name="Confirmar"
            dependencies={['password']}
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('Senha') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('As Senhas não são iguais!'))
                }
              })
            ]}
            hasFeedback
          >
            <Input.Password className="cad-input" required />
          </Form.Item>
        </div>
      </div>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 1, span: 10 }}
      >
        <Checkbox className="check">Sou Aluno</Checkbox>
      </Form.Item>
      <div className="container-inferior">
        <Form.Item
          wrapperCol={{ offset: 7, span: 10 }}
          className="inferior-item"
        >
          <Button type="primary" htmlType="submit">
            Cadastrar
          </Button>
        </Form.Item>

        <Form.Item name="Entrar" className="inferior-item">
          <p className="bottom-text">
            Ja Possui Uma Conta?{' '}
            <a href="/login" className="blue-text">
              Entrar
            </a>
          </p>
        </Form.Item>

        <Form.Item name="esqueci" className="inferior-item">
          <div className="bottom-text">
            Não consegue entrar?
            <button className="blue-text">Esqueci minha senha</button>
          </div>
        </Form.Item>
      </div>
    </Form>
  )
}
