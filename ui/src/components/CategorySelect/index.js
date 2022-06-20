import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import _service from '@netuno/service-client';

const CategorySelect = (onChange) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    _service({
      url: '/category/list',
      success: (response) => {
        setList(response.json);
      },
      fail: (e) => {
        console.log('Service Error', e);
      },
    });
  }, []);

  const onSelectChange = (newValue) =>{
    if(onChange){
    onChange(newValue);
  }
  return (

    <Select style={{ width: '250px' }} onChange={onSelectChange}>
      {list.map((item) => {
        return <Select.Option  value={item.code}>{item.name}</Select.Option>;
      })} 
    </Select>
  );
}};
export default CategorySelect;
