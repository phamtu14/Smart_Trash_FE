import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100% !important;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export const WebLayout = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) {
    display: unset;
  }
`;

export const StyledContainer = styled.div`
  max-width: 1200px !important;
  padding-right: 0 !important;
  padding-left: 0 !important;

  @media (max-width: 768px) {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
`;

export default GlobalStyle;
