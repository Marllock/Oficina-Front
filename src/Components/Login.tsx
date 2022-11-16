import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< Updated upstream:src/pages/Login/index.tsx
import { AuthContext } from "../../contexts/Auth/AuthContext";
=======
import { AuthContext } from "../contexts/Auth/AuthContext";
import { Button, Form, Input } from 'antd';
import '../Styles/login.css';

>>>>>>> Stashed changes:src/Components/Login.tsx

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

<<<<<<< Updated upstream:src/pages/Login/index.tsx
    return (
        <div>
            <h2>Página Fechada</h2>
            
            <input type='text' 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            placeholder='Digite seu e-mail!'/>

            <input type='password' 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            placeholder='Digite sua senha!'/>

            <button onClick={handleLogin}>Login</button>
        </div>
=======
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
        <Form.Item
          label="Email"
          name="Email"
          rules={[{ required: true, message: 'Por Favor insira seu email!' }]}
        >
          <Input onChange={e => setEmail(e.target.value)} />
        </Form.Item>
  
        <Form.Item
          label="Senha"
          name="Senha"
          rules={[{ required: true, message: 'Por favor Insira sua senha!' }]}
        >
          <Input.Password onChange={e => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
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
>>>>>>> Stashed changes:src/Components/Login.tsx
    );
}