import React from 'react';
import { Footer } from 'antd/lib/layout/layout';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import './footer.less';

const Rodape = () => {
  return (
    <Footer>
      <div className="midia_social">
        <span>
          <p className="text_footer"> © NetDogs 2022 </p>
        </span>
        <GithubOutlined className="githubIcon" />
        <LinkedinOutlined className="linkedinIcon" />
      </div>
    </Footer>
  );
};

export default Rodape;
