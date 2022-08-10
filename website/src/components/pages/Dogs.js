import { Col, Divider, Row } from 'antd';
import React from 'react';
import Card from '../Card/index';
import '../Layout/container.less';

const Dogs = () => {
  return (
    <>
      <Divider orientation="left">Doações de Filhotes</Divider>
      <Row
        gutter={{
          /*  xs: 8,
        sm: 16,
        md: 24, */
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={6}>
          <Card className="card_itens" />
        </Col>
        <Col className="gutter-row" span={6}>
          <Card className="card_itens" />
        </Col>
        <Col className="gutter-row" span={6}>
          <Card className="card_itens" />
        </Col>
        <Col className="gutter-row" span={6}>
          <Card className="card_itens" />
        </Col>

        <Divider orientation="left">Doações de Cães Adultos</Divider>

        <Col className="gutter-row" span={6}>
          <Card className="card_itens" />
        </Col>
        <Col className="gutter-row" span={6}>
          <Card className="card_itens" />
        </Col>
        <Col className="gutter-row" span={6}>
          <Card className="card_itens" />
        </Col>
        <Col className="gutter-row" span={6}>
          <Card className="card_itens" />
        </Col>
      </Row>
    </>
  );
};

export default Dogs;
