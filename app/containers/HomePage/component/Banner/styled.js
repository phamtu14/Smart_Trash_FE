import styled from 'styled-components';
import { Button } from 'antd';

export const BannerLeft = styled.div`
  margin-top: 83px;
  @media (max-width: 768px) {
    margin-top: 43px;
  }
`;

export const StyledTextBanner = styled.div`
  font-size: 43px !important;
  font-weight: 500 !important;
  line-height: 50px;
  padding: 0;

  @media (max-width: 768px) {
    font-weight: 500 !important;
    font-size: 31px !important;
    line-height: 45px;
  }
`;

export const LineContentBannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0 17px;
  img {
    width: 17px;
    height: 16px;
    margin-left: 0;
    margin-bottom: 2px;
  }

  @media (max-width: 768px) {
    gap: 0 14px;
    img {
      margin-left: 0;
      width: 13.64px;
      height: 14px;
    }
  }
  animation-duration: 2s;
  animation-name: fadeInLeft;
  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      transform: translateX(-20px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      transform: translateX(-20px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
    }
  }
  .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 21px;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 32px;
  }
`;

export const ButtonContact = styled(Button)`
  border-radius: 8px;
  color: #ffffff;
  background: #485444;
`;
