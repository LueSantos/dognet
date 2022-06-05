import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import _service from '@netuno/service-client';

const CategorySelect = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    _service({
      url: '/services/category/list',
      method: 'GET',
      success: (response) => {
        setList(response.json);
      },
      fail: (e) => {
        console.log("Service Error", e);
      },
    });
  }, []);

  return (
  
      <Select style={{ width: '250px' }}>
        {list.map((item) => {
          return <Select.Option value={item.code}>{item.name}</Select.Option>;
        })}
      </Select>
  );
};
export default CategorySelect;
