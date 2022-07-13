import React, { useState } from 'react';

import { Button, Carousel } from 'antd';
import fotoBoxer from '../assets/boxer.jpg';
import foto from '../assets/dog_192.png';
import fotoHusk from '../assets/husk.jpg';
import fotoLabrador from '../assets/labrador.jpg';

const contentStyle = {
  height: '300px',
  color: '#fff1',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};




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
        <Carousel autoplay effect="fade">
          <div >
            <h3 style={contentStyle}>
              <img src={foto} alt="Foto de dog"></img>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src={fotoHusk} alt="Dog Husk"></img>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src={fotoLabrador} alt="Dog Labrador"></img>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src={fotoBoxer} alt="Dog Labrador"></img>
            </h3>
          </div>
        </Carousel>

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
