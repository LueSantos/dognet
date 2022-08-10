import React from 'react';

import { Button, Col, Divider, Row } from 'antd';
import Cards from '../Card';






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
      <h1>Home</h1>
      <h2> Conecte seu dog ou adote um ! </h2>
      <container>
       <section>
       <Divider orientation="left">Responsive</Divider>
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={6}>
        <div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div><Cards/> </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>col-6</div>
      </Col>
    </Row>

       </section>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{' '}
        </p>

    <Button>
        Cadastre
    </Button>

      </container>
    </>
  );
};

export default Home;
