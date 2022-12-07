import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import UserService from '../hooks/UserService'
import '../Styles/login.css'

const userService = new UserService()

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [form, setForm] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    try {
      setLoading(true)
      const response = await userService.login(form)
      console.log('response do Login', response)
      if (response) {
        alert('usuário Logado com Sucesso')
        navigate('/Alunos')
      }
      setLoading(false)
    } catch (err) {
      alert('Algo deu errado com o Login' + err)
    }
  }

  const handleChange = (event: { target: { name: any; value: any } }) => {
    // setForm({[event.target.name]: event.target.value})
  }

  return (
    <Form
      className="form-login"
      name="basic"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <div className="CE-name">Faça login no CE</div>
      <div className="Email-container">
        <label>Email</label>
        <Form.Item
          wrapperCol={{ offset: 0, span: 20 }}
          name="Email"
          rules={[{ required: true, message: 'Por Favor insira seu email!' }]}
        >
          <Input onChange={handleChange} />
        </Form.Item>
      </div>
      <div className="Senha-container">
        <label>Senha</label>
        <Form.Item
          wrapperCol={{ offset: 0, span: 20 }}
          name="Senha"
          rules={[{ required: true, message: 'Por favor Insira sua senha!' }]}
        >
          <Input.Password onChange={handleChange} />
        </Form.Item>
      </div>
      <Form.Item wrapperCol={{ offset: 4, span: 17 }}>
        <Button onClick={handleSubmit} type="primary" htmlType="submit">
          Entrar
        </Button>
      </Form.Item>

      <Form.Item name="cadastrar" wrapperCol={{ offset: 4, span: 16 }}>
        <p className="bottom-text">
          Ainda não tem uma conta?{' '}
          <a href="/Cadastro" className="blue-text">
            Cadastrar
          </a>
        </p>
      </Form.Item>

      <Form.Item name="esqueci" wrapperCol={{ offset: 4, span: 16 }}>
        <div className="bottom-text">
          Não consegue entrar?
          <button className="blue-text">Esqueci minha senha</button>
        </div>
      </Form.Item>
    </Form>
  )
}

export default Login
