import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export const Home = () => {

  const location = useLocation();

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Sider
          width={250}
          theme="light">
          <Menu theme="light"
            mode="vertical"
            defaultSelectedKeys={['1']}
            style={{
              height: '100%',
              borderRight: '1px solid gainsboro',
              minHeight: '110vh'
            }}>
            <Menu.Item key="1" title="projetos listados">
              <Link to="/projetos-listados">
                Total de projetos listados
              </Link>
            </Menu.Item>
            <Menu.Item key="2" title="dashboard">
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="3" title="gerenciar proejtos">
              <Link to="gerenciar-projetos">Gerenciar Projetos</Link>
            </Menu.Item>
            <Menu.Item key="4" title="adicionar projeto">
              <Link to="adicionar-projeto">adicionar projeto</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <div style={{ flex: 1 }}>
          <Header style={{
            color: '#141414',
            backgroundColor: '#ffffff',
            borderBottom:'1px solid #b9b5b56f',
            textTransform: 'capitalize',
            fontSize:'1.2rem',
            height:'7vh',
            display:'flex',
            alignItems: 'center',
          }}>
            <h3>administração de projetos {'>'} {location.pathname}</h3>
          </Header>
          <Content style={{ height: '90vh' }}>
            <Outlet />
          </Content>
          <Footer style={{ height:'auto', backgroundColor:'#fff', borderTop:'1px solid rgba(230,230,230,890)'}}>
             <p>Feito e mantido por hebert santos &copy; 2023 todos os seus direitos reservados</p>
          </Footer>
        </div>
      </div>
    </div>
  )
}