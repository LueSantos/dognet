import React from 'react';

const Header = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Link to="/Home">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Dogs">Cães</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Partners">Parceiros</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Contact">Contato</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
