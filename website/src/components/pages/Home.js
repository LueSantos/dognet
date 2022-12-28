import React from 'react';
import { Button, Col, Divider, Row } from 'antd';
import foto_dog from '../assets/testando.jpg';
import banner_dog from '../assets/banner_dogs_2.jpg';
import foto_qs from '../assets/foto_qs.jpg';

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
      <div className="foto_banner-dog">
        <img src={banner_dog} width="100%" alt="cães no muro"></img>
        <div className="btn-cadastro">
          <Button>Adote um Cão</Button>
        </div>
      </div>
      <h2>Este site é destinado a adoções de animais e serviços.</h2>
      <Divider />

      <section className="container-main">
        <Row gutter={8} justify="start">
          <Col className="gutter-row" span={12}>
            <div className="box-area-text">
              <h2>Quem Somos </h2>
              <ul>
                <li>Lorem Ipsum is simply</li> 
                <li>Lorem Ipsum is simply</li> 
                <li>Lorem Ipsum is simply</li> 
                <li>Lorem Ipsum is simply</li> 
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, Aenean commodo ligula eget dolor. Aenean massa. Aenean commodo ligula eget dolor. Aenean massa. nascetur ridiculus mus.</p>                          
              </ul>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div>
              <img src={foto_qs} width="100%" alt="foto de um cão"></img>
            </div>
          </Col>
        </Row>
      </section>
      <Divider />
      <section>
        <Row gutter={8} justify="end">
          <Col className="gutter-row" span={8}>
            <div>
              <img src={foto_dog} width="100%" alt="foto de um cão"></img>
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className="box-area-text">
              <h2>Serviços Veterinários</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </Col>
        </Row>
      </section>
      <Divider />
      <section>
        <Row gutter={8} justify="start">
          <Col className="gutter-row" span={12}>
            <div className="box-area-text">
              <h2>Serviços Pet-Shops</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
              </p>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div>
              <img src={foto_dog} width="100%" alt="foto de um cão"></img>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Home;
