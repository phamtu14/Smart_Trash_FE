import styled from 'styled-components';

export const Title = styled.div`
  font-size: 2rem;
`;

export const Detail = styled.div`
  font-size: 1rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

export const LineContentBannerLeft = styled.div`
  display: flex;
  align-items: flex-start;
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

export const DivIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
