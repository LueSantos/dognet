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
        <Popover content={content} title="LABRADOR">
          <Card
            hoverable
            style={{
              width: 220,
            }}
            cover={
              <img src={fotoLabrador} alt="Dog Labrador">
              
              </img>
            }
          >
            <Tag color="green">Adote-me</Tag>
            <Meta
              title=" Filhote 1"
              description="Colocar as infos do dog e a tag para sinalizar se está para adoção"
            />
          </Card>
        </Popover>
      </div>
    </>
  );
};

export default Cards;
