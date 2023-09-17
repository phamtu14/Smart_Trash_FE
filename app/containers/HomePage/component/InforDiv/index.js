import React from 'react';
import { Container, Detail, Title } from './styled';

const InfoDiv = ({ title, detail }) => (
  <Container>
    <Title>{title}</Title>
    <Detail>{detail}</Detail>
  </Container>
);

export default InfoDiv;
