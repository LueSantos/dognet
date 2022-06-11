import React from 'react';

import { Form, Input, Button, notification } from 'antd';

import CategorySelect from '../CategorySelect/list';

import _service from '@netuno/service-client';


const Cadastro = () => {

  const onFinish = (values) => {
    _service({
      url: '/establishment',
      method: "POST",
      data: values,
      success: (response) => {
        notification.success({
          message: "Estabelecimento",
          description: " O estabelecimento foi criado com sucesso!"
        });
      },
      fail: (e) => {
        console.error('Service Error', e);
        notification.error({
          message: "Estabelecimento",
          description: " Não foi possível criar o estabelecimento!"
        });
      },
    });  };
  

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{}}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Categoria"
        name="category"
        rules={[
          {
            required: true,
            message: 'Preencha a categoria!',
          },
        ]}
      >
        <CategorySelect />
      </Form.Item>

      <Form.Item
        label="Nome"
        name="name"
        rules={[
          {
            required: true,
            message: 'Preencha o seu nome!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Preencha o seu email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Telefone"
        name="telephone"
        rules={[
          {
            required: true,
            message: 'Preencha o telefone!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Endereço"
        name="address"
        rules={[
          {
            required: true,
            message: 'Preencha o seu endereço!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button className='enviar' type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Cadastro;
