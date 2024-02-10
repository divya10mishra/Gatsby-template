import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: '<b>Hey !</b> I\'m Divya Mishra, a seasoned <b>Full-Stack</b> developer with 5+ years of hands-on experience in crafting exceptional digital solutions. My expertise lies in JavaScript libraries and frameworks, including ReactJS and Node.js. Additionally, I have proficiency in unit testing and performance testing with jest. I take pride in building scalable applications that effortlessly integrate components, tools, and services. My journey into cloud technology has broadened my horizons, with proficiency in AWS services with managing infrastructure as code and enhancing the depth of my projects.',
  paraTwo: 'Welcome to my portfolio, a testament to my commitment, innovation, and dedication to transforming ideas into functional realities. Let\'s collaborate to create digital experiences that brilliantly unite creativity and functionality.',
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['MERN', 'AWS', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Frontend', 'NextJs']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Voc in"
            textH3="Software Development"
            height={60}
            width={60}
          />
        </Col>
        {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Barabanki, India"
          />
        </Col> */}
        {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col> */}
        {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Active"
            textH3="Inspired"
          />
        </Col> */}
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="experience.png"
            alt="experience.png"
            textH4="Professional Experience"
            textH3="5 Years"
          />
        </Col>
        {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="guitar.png"
            alt="guitar image"
            textH4="Love to sing & play"
            textH3="Guitar"
          />
        </Col> */}
        {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col> */}
      </Row>
    </>
  );
};
export default AboutMe;
