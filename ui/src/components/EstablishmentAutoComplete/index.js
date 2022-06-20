import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import _service from '@netuno/service-client';

const EstablishmentAutoComplete = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    _service({
      url: '/establishment/list',
      success: (response) => {
        setList(response.json);
      },
      fail: (e) => {
        console.log('Service Error', e);
      },
    });
  }, []);

const onSearch = (value)=>{

  _service({
    url: '/establishment/list',
    data: {search: value},
    success: (response) => {
      setList(response.json);
    },
    fail: (e) => {
      console.log('Service Error', e);
    },
  });
}


  return (
    <Select style={{ width: '250px', margin:"10px" }} onSearch={onSearch}
    showSearch
    allowClear>
     
      {list.map((item) => {
        return( <Select.Option value={item.uid}>
          {item.name}
         &nbsp; - &nbsp;
          {item.category.name}

          </Select.Option>)
      })}
    </Select>
  );
};
export default EstablishmentAutoComplete;
