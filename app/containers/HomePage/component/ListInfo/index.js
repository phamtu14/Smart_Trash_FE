import React from 'react';
import { Col, Row } from 'antd';
import { Detail, Item, Title } from './styled';

const ListInfor = () => {
  const A = 10;
  return (
    <div style={{ marginTop: '40px', height: '200px' }}>
      <Row gutter={8}>
        <Col span={6}>
          <Item>
            <Title>45 cities</Title>
            <Detail>with solution installed</Detail>
          </Item>
        </Col>
        <Col span={6}>
          <Item>
            <Title>In-house R&D</Title>
            <Detail>made in Vietnam</Detail>
          </Item>
        </Col>
        <Col span={6}>
          <Item>
            <Title>Enterpise-grade</Title>
            <Detail>HW, SW and analytics solution</Detail>
          </Item>
        </Col>
        <Col span={6}>
          <Item>
            <Title>How can our solution help you?</Title>
            <Detail />
          </Item>
        </Col>
      </Row>
    </div>
  );
};

export default ListInfor;
