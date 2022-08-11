import React from 'react';

import { Button, Col, Row } from 'antd';
import foto_dog from '../assets/testando.jpg';

/*  ClickPage = () =>{
    
    const [changePage, setChangePage] = useState();

 ToPage = () =>{

    setChangePage(onclick)

 }
    
}
 */

const Home = () => {
  return (
    <>
      <h1>Adote um cão !</h1>
      <h2>
        Não é permitido a comercialização de animais ou serviços!
        <br />
        Este site é destinado somente a adoções.
      </h2>
      <section>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col className="gutter-row" span={6}>
            <div>
              <h1>Inserir um título aqui </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div>
              <img src={foto_dog} alt="foto de um cão"></img>
            </div>
          </Col>
          {/*  <Col className="gutter-row" span={2}>
            <div>col-6</div>
          </Col>
          <Col className="gutter-row" span={2}>
            <div>col-6</div>
          </Col> */}
        </Row>
      </section>
      <section>
        <Col className="gutter-row" span={2}>
          <div>col-6</div>
        </Col>
        <Col className="gutter-row" span={2}>
          <div>col-6</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
            <img src={foto_dog} alt="foto de um cão"></img>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>
            <h1>Inserir um título aqui </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </div>
        </Col>
      </section>

      <Button>Cadastre</Button>
    </>
  );
};

export default Home;
