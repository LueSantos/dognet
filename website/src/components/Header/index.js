import { Menu, Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoDog from '../assets/Logo3_pet.png';
import './header.less';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header>
      <Menu mode="horizontal">
        <div className="logo">
          <Menu.Item>
            <Link to="/Home">
              <img src={LogoDog} alt="Logo Dog" width={55}></img>
            </Link>
          </Menu.Item>
        </div>

        <Menu.Item>
          <Link to="/Login">Login</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/Dogs">Pets</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/Cadastre">Tela de cadastro</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
