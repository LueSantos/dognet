 import React from 'react';
import { Col, Divider, Row } from 'antd';
import '../Layout/container.less';


const style = {
  background: '#0092ff',
  padding: '8px 0',
};

const Partners = () => {
  return (
    <>
      <Divider orientation="left">Seja um doador</Divider>
      <Row
        gutter={{
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={6}>
          <div style={style}>Teste aqui</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>Teste aqui</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>Teste aqui</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>Teste aqui</div>
        </Col>
      </Row>
    

<Divider orientation="left">TESTANDO</Divider>
</>
  );
};
export default Partners;





