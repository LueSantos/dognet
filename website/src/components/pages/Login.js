import React from 'react';
import { Button, Divider, Form, Input, Typography } from 'antd';
import { FacebookOutlined, GoogleOutlined, InstagramOutlined } from '@ant-design/icons'
 import '../Layout/container.less'; 
import '../pages/login.less';


const Login = () => {
  return (
    <div className="bgLogin">
      <Form className="cardLogin">
        <Typography.Title> Bem - Vindes</Typography.Title>
        <Form.Item label="Email">
          <Input placeholder=" Digite seu email"></Input>
        </Form.Item>
        <Form.Item label="Senha">
          <Input placeholder=" Digite sua senha"></Input>
        </Form.Item>
        <Button type='primary'block>Enviar</Button>
        <Button type="link">Esqueceu a senha?</Button>
        <Divider mode="horizontal">
          Ou entre com
        </Divider>
        <div className='socialIcon'>
        <GoogleOutlined className='googleIcon' />
        <FacebookOutlined className='facebookIcon' />
        <InstagramOutlined className='instagramIcon'/>
        </div>
      </Form>
    </div>
  );
};
export default Login;
