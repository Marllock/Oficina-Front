import '../Styles/home.css';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import '../Styles/home.less';
import  { useContext } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext'
import { useNavigate, Route, Routes } from 'react-router-dom';
import {
  HomeFilled
} from '@ant-design/icons';

const { Content, Sider } = Layout;


export const Private = () =>{
  const [collapsed, setCollapsed] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.sigout();
    navigate('/');
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['/']} mode="inline" 
        onClick={({key})=>{
          if(key === "sair") {
            handleLogout();
          }else{
            navigate(key);
          }
        }}
         items={[
          {label: "Home", key: "/",icon:<HomeFilled />},
          {label: "Alunos", key: "/alunos"},
          {label: "Professores", key:"/teacher"},
          {label: "Sair", key: "sair", danger:true}
        ]}>
        </Menu>
        
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
        <Conteudo />
        </Content>
      </Layout>
    </Layout>
  );
};

function Conteudo() {
  return <div>
    <Routes>
    <Route path="/alunos" element={<div>Alunos</div>}/>
    <Route path="/teacher" element={<div>Professores</div>}/>
    </Routes>
  </div>
}