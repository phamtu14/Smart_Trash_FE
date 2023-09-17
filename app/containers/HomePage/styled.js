import styled from 'styled-components';
import { Button, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';

export const HeaderLayout = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  background: #485444;
`;

export const MenuHomepage = styled(Menu)`
  background: #485444;
  color: #ffffff;
  &.ant-menu-horizontal {
    border-bottom: none !important;
  }
`;

export const ButtonLogin = styled(Button)`
  border-radius: 8px;
  color: #485444;
  background: #ffffff;
  display: inline-block;
  margin: auto;
`;

export const DivIconSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 20px;
`;
