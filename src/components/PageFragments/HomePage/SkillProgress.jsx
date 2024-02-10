import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <br />
    <br />
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={85}
          text="JavaScript"
        />
        <ProgressBar
          percent={87}
          text="React.js"
        />
        <ProgressBar
          percent={78}
          text="Node.js"
        />
        <ProgressBar
          percent={70}
          text="TypeScript"
        />
        <ProgressBar
          percent={72}
          text="Redux"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={83}
          text="HTML and CSS"
        />
        <ProgressBar
          percent={80}
          text="Unit, Performance and Automation Testing"
        />
        <ProgressBar
          percent={50}
          text="MongoDB"
        />
        <ProgressBar
          percent={60}
          text="DevOps(Infra as code/CDK)"
        />
        <ProgressBar
          percent={68}
          text="AWS services"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
