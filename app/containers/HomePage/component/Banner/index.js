import React from 'react';
import { Col, Row } from 'antd';
import { ButtonContact, LineContentBannerLeft } from './styled';

const Banner = () => (
  <div style={{ height: '300px' }}>
    <Row className="main-banner-left-content" style={{ width: '100%' }}>
      <LineContentBannerLeft
        className="wow fadeInLeft bounceInLeft"
        data-wow-duration="2s"
        data-wow-delay="0.2s"
        style={{ 'animation-delay': '0.2s', width: '100%' }}
      >
        <Row style={{ width: '100%' }}>
          <Col span={12}>
            <div style={{ fontSize: '3rem' }}>
              Global leader in smart waste solutions
            </div>
            <br />
            <br />
            <div>
              By developing & deploying resilient hardward and beautiful soft
              ware we empower cities, business, and countries to manage waste
              smarter
            </div>
            <br />
            <br />
            <ButtonContact>Contact</ButtonContact>
          </Col>
          <Col span={12} />
        </Row>
      </LineContentBannerLeft>
    </Row>
  </div>
);

export default Banner;
