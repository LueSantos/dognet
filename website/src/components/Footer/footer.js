import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import './footer.less';

const Rodape = () => {
  return (
    <Footer>
      <>
      <div className="midiaSocial">
        <LinkedinOutlined />
        <GithubOutlined />
      </div>
     
      <div className="text_footer">
      <p> 2022 NetDogs </p>
      </div>
      </>
    </Footer>
  );
};

export default Rodape;
