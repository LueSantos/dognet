import React from 'react';

import { Form, Input, Button, notification, Upload } from 'antd';

import CategorySelect from '../CategorySelect/list';

import _service from '@netuno/service-client';

import { UploadOutlined } from '@ant-design/icons';



//Usar o FormData() sempre que for usar um upload. Ele é passsado no lugar do Values
const Cadastro = () => {
  const onFinish = (values) => {
    const formData = new FormData();
      
      formData.append("category", values.category);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("telephone", values.telephone);
      formData.append("address", values.address);
      if(values.photo && values.photo.fileList.length > 0){
        formData.append("photo", values.photo.fileList[-1].originFileObj);
      }


    _service({
      url: '/establishment',
      method: 'POST',
      data: formData,
      success: (response) => {
        notification.success({
          message: 'Estabelecimento',
          description: ' O estabelecimento foi criado com sucesso!',
        });
      },
      fail: (e) => {
        console.error('Service Error', e);
        notification.error({
          message: 'Estabelecimento',
          description: ' Não foi possível criar o estabelecimento!',
        });
      },
    });
  };

  //Desativar a automação da notificação do btn de upload
  const uploadCustomRequest = ({ file, onSuccess }) => {
    return setTimeout(() => {
      onSuccess('Ok');
    }, 0);
  };

  //Validar o tipo de arquivo que está sendo feito o upload
  const uploadBeforeValidation = (file) => {
    const isPhoto = file.type === 'image/jpg' || file.type === 'image/png' ||file.type === 'image/jpeg';
    if (!isPhoto) {
      notification.error({
        message: 'Imagem inválida',
        description: 'Apenas imagens nos formatos: jpg/jpeg e png!',
      });
    }
    return isPhoto || Upload.LIST_IGNORE;
  };

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

      <Form.Item label="Fotografia" name="photo">
        <Upload
          customRequest={uploadCustomRequest}
          beforeUpload={uploadBeforeValidation}
        >
          <Button icon={<UploadOutlined />}>Enviar</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button className="enviar" type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Cadastro;
