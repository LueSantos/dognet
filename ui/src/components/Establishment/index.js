import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import _service from '@netuno/service-client';

const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
    {
      title: 'Telefone',
      dataIndex: 'telefone',
      key: 'telefone',
    },
    {
      title: 'Endereço',
      dataIndex: 'endereco',
      key: 'endereco',
    },
    {
    title: 'Categoria',
      dataIndex: 'categoria',
      key: 'categoria',
      /* render: (categoria) =>{
        return <>
        {categoria.name}
        </>
      } */
    },
    
  ];


const Establishment = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    _service({
      url: "/establishment/list",
      success: (response) => {
        setList(response.json);
      },
      fail: (e) => {
        console.log("Service Error", e);
      }
    });
  }, []);

  return (
    <div>
   <Table columns={columns} dataSource={list} />
    </div>

  );
};
export default Establishment;
