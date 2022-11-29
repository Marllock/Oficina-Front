import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { Button, Form, Input } from 'antd';
import '../Styles/login.css';



export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.sigin(email, password);
            if(isLogged) {
                navigate('/')
            }else{
                alert("Erro!")
            }
        }
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
          <Input onChange={e => setEmail(e.target.value)} />
        </Form.Item>
        </div>
        <div className="Senha-container">
        <label>Senha</label>
        <Form.Item
          wrapperCol={{ offset: 0, span: 20 }}
          name="Senha"
          rules={[{ required: true, message: 'Por favor Insira sua senha!' }]}
        >
          <Input.Password onChange={e => setPassword(e.target.value)} />
        </Form.Item>
        </div>
        <Form.Item wrapperCol={{ offset: 4, span: 17 }}>
          <Button onClick={handleLogin} type="primary" htmlType="submit">
            Entrar
          </Button>
        </Form.Item>

          <Form.Item name="cadastrar" wrapperCol={{ offset: 4, span: 16 }}>
            <p className="bottom-text">Ainda não tem uma conta? <a href="/Cadastro" className="blue-text">Cadastrar</a></p>
          </Form.Item>

          <Form.Item name="esqueci" wrapperCol={{ offset: 4, span: 16 }}>
            <div className="bottom-text">Não consegue entrar?<button className="blue-text">Esqueci minha senha</button></div>
          </Form.Item>
        
      </Form>

    );
}