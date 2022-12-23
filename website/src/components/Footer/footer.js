import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import './footer.less';

const Rodape = () => {
  return (
    <Footer>
      <>
        <ul className="midia_social">
          <li>
            <p className="text_footer"> © NetDogs 2022 </p>
          </li>
          <li>
            <GithubOutlined style={{ fontSize: '26px' }} />
          </li>
          <li>
            <LinkedinOutlined style={{ fontSize: '26px' }} />
          </li>
        </ul>
      </>
    </Footer>
  );
};

export default Rodape;
