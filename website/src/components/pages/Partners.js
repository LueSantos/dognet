 import React from 'react';
import { Col, Divider, Row } from 'antd';
import '../Content';

const style = {
  background: '#0092ff',
  padding: '8px 0',
};

const Partners = () => {
  return (
    <>
      <Divider orientation="left">Responsive</Divider>
      <Row
        gutter={{
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </>
  );
};
export default Partners;





