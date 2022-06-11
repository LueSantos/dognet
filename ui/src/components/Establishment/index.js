import React, { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';
import _service from '@netuno/service-client';

const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
    {
      title: 'Telefone',
      dataIndex: 'telephone',
      key: 'telephone',
    },
    {
      title: 'Endereço',
      dataIndex: 'address',
      key: 'address',
    },
    {
    title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
       render: (category) =>{
        let color = "orange"
        if(category.code == "usuario"){
          color = "green"
        }else if(category.code == "veterinaria"){
          color = "blue"
        }
        return <Tag color={color}>
        {category.name}
        </Tag>
      }    
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
    <div style={{padding: "15px"}}>
   <Table columns={columns} dataSource={list} />
    </div>

  );
};
export default Establishment;
