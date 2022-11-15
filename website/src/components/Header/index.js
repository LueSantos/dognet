import { Menu, Layout, Image } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoDog from '../assets/LogoDog.png';
import './header.less';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header>
      <Menu mode="horizontal">
        <div className="logo">
          <img src={LogoDog} alt="Logo Dog"></img>
        </div>
        <Menu.Item>
          <Link to="/Home"> Home</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/Dogs">Pets</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/Partners">Parceiros</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/Cadastre">Login</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
