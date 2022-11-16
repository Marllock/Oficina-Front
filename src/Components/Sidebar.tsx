import '../Styles/SideBar.css';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import  { useContext } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext'
import { useNavigate } from 'react-router-dom';
import {HomeFilled} from '@ant-design/icons';

const { Sider } = Layout;


export const SideBar = () =>{
  const [collapsed, setCollapsed] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.sigout();
    navigate('/');
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider className='sider' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
        <div className="logo" />
        <Menu className='menu-sider' defaultSelectedKeys={['/']} mode="inline" 
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
          {label: "Curso", key:"/Course"},
          {label: "Usuarios", key:"/Users"},
          {label: "Sair", key: "sair", danger:true}
        ]}>
        </Menu>
        
      </Sider>
    </Layout>
  );
};