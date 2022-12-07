import '../Styles/SideBar.css';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {UserOutlined, AuditOutlined,
        BookOutlined,TeamOutlined,LogoutOutlined} from '@ant-design/icons';

const { Sider } = Layout;


export const SideBar = () =>{
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider className='sider' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
        <div className="logo" />
        <Menu className='menu-sider' defaultSelectedKeys={['/']} mode="inline" 
        onClick={({key})=>{
          if(key === "sair") {
            navigate('/login')
          }else{
            navigate(key);
          }
        }}
         items={[
          {label: "Alunos", key: "/aluno",icon:<UserOutlined/>},
          {label: "Professores", key:"/Professor",icon:<AuditOutlined/>},
          {label: "Curso", key:"/Curso",icon:<BookOutlined/>},
          {label: "Turmas", key:"/Turma",icon:<TeamOutlined/>},
          {label: "Sair", key: "sair", danger:true,icon:<LogoutOutlined/>}
        ]}>
        </Menu>
        
      </Sider>
    </Layout>
  );
};