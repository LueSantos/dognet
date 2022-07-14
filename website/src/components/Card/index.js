import React from 'react';
import { Card, Popover } from 'antd';
import fotoLabrador from '../assets/labrador.jpg';
import "./index.less";

const { Meta } = Card;

const content = (
  <div>
    <p>IDADE: 1 mês</p>
    <p>teste 2</p>
  </div>
);
const Cards = () => {
  return (
    <>
    <div className='container_card'>
      <Popover content={content} title="LABRADOR">
        <Card
          hoverable
          style={{
            width: 220,
          }}
          cover={<img src={fotoLabrador} alt="Dog Labrador"></img>}
        >
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
