import { Menu, Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoDog from '../assets/Logo3_pet.png';
import './header.less';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header>
      <Menu mode="horizontal" className='menu_teste'>
        <div className="logo">
          <img src={LogoDog} alt="Logo Dog" width={60}></img>
        </div>
        <Menu.Item>
          <Link to="/Partners">Quem somos</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/Dogs">Pets</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/Home">Parceiros</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/Cadastre">Login</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
