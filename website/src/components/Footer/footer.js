import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import './footer.less';

const Rodape = () => {
  return (
    <Footer>
      <>
        <ul className='midia_social'>
          <li>
            <LinkedinOutlined />
          </li>
          <li>
            <GithubOutlined />
          </li>
        </ul>

        <span className="text_footer">
          <p>   NetDogs 2022 </p>
        </span>
      </>
    </Footer>
  );
};

export default Rodape;
