import React from 'react';
import { Card, Popover, Tag } from 'antd';
import fotoLabrador from '../assets/labrador.jpg';
import './index.less';

const { Meta } = Card;

const content = (
  <div>
    <p>Idade: 2 mês</p>
    <p>Raça: Não definida</p>
  </div>
);
const Cards = () => {
  return (
    <>
      <div className="container_card">
        <Popover content={content} title="FILHOTE">
          <Card
            hoverable
            style={{
              width: 200,
            }}
            cover={<img src={fotoLabrador} alt="Dog Labrador"></img>}
          >
            <Tag color="green">Adote-me</Tag> 
            <Meta title=" Filhote" description="Saiba mais..." />
          </Card>
        </Popover>
      </div>
    </>
  );
};

export default Cards;
