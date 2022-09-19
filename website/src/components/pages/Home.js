import React from 'react';

import { Button, Col, Divider, Row } from 'antd';
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
      <h1>Seja um parceiro!</h1>
      <h2>Este site é destinado a adoções de animais e serviços.</h2>

      <Divider />
      <section>
        <Row gutter={8} justify="start">
          <Col className="gutter-row" span={6}>
            <div>
              <h2>Serviços de Petshop </h2>
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
        </Row>
        <Button>Cadastre</Button>
      </section>
      <Divider />
      <section>
        <Row gutter={8} justify="end">
          <Col className="gutter-row" span={8}>
            <div>
              <h2>Serviços Veterinários</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
              </p>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div>
              <img src={foto_dog} alt="foto de um cão"></img>
            </div>
          </Col>
        </Row>
      </section>

      <section>
        <Row gutter={8} justify="end">
          <Col className="gutter-row" span={8}>
            <div>
              <h2>Serviços Veterinários</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
              </p>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div>
              <img src={foto_dog} alt="foto de um cão"></img>
            </div>
          </Col>
        </Row>
      </section>
    
    </>
  );
};

export default Home;
