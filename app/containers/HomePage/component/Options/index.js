import React from 'react';
import { Col, Row } from 'antd';
import {
  Container,
  Detail,
  DivIcon,
  Title,
  LineContentBannerLeft,
} from './styled';

import IconChecked from '../../../../images/checkedIcon.svg';

const Options = () => {
  const A = 10;
  return (
    <Row gutter={24}>
      <Col span={12}>
        <Container>
          <Title>Smart City</Title>
          <LineContentBannerLeft
            className="wow fadeInLeft bounceInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
            style={{
              animationDelay: '0.3s',
              width: '100%',
              alignItems: 'flex-start',
              textAlign: 'left',
            }}
          >
            <DivIcon>
              <img src={IconChecked} alt="" width={30} height={30} />
            </DivIcon>
            <Detail>Clean & safe public space </Detail>
          </LineContentBannerLeft>
          <LineContentBannerLeft
            className="wow fadeInLeft bounceInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
            style={{
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            <DivIcon>
              <img src={IconChecked} alt="" width={30} height={30} />
            </DivIcon>
            <Detail>Zero waste approach support</Detail>
          </LineContentBannerLeft>
        </Container>
      </Col>
      <Col span={12} />
    </Row>
  );
};

export default Options;
