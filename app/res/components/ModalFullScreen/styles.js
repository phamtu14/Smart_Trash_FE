import styled from 'styled-components';
import { Button, Modal } from 'antd';

export const ModalWrapper = styled(Modal)`
  &.ant-modal {
    top: 0;
    max-width: none;
    padding-bottom: 0;
    height: 100vh;
    width: 100vw !important;
  }

  .ant-modal-content {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .ant-modal-body {
    height: 100%;
    overflow-y: overlay;
    padding: 20px 22px 20px 24px;
    margin: 4px 2px 4px 0;
  }

  .ant-modal-header {
    height: 45px;
    background: ${props => props.theme.primaryColor};
    border: 1px solid ${props => props.theme.primaryColor};
    display: flex;
    position: relative;
    padding: 11px 20px;
    justify-content: center;
  }

  .ant-modal-title {
    font-weight: bold;
    font-size: 16px;
    color: ${props => props.theme.colors.white};
  }

  .ant-modal-footer {
    padding: 16px 24px 20px;
    border-top: none;
  }

  .ant-modal-close-x {
    cursor: pointer;
    width: 45px;
    height: 45px;
    line-height: 45px;
    color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:focus {
    outline: none;
  }
`;

export const DivFooter = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  font-weight: 400;
`;

export const DivFooterLeft = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`;

export const DivFooterRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const ButtonFooter = styled(Button)`
  display: flex;
  height: 40px;
  align-items: center;
  border-radius: 12px;
  color: ${props => props.theme.primaryColor};
  justify-content: center;
  line-height: 19px;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 16px;
  &.ant-btn:hover,
  &.ant-btn:focus {
    color: ${props => props.theme.primaryColor};
  }
  :hover {
    -webkit-filter: drop-shadow(0px 0px 3px #000);
    filter: drop-shadow(0px 0px 3px #000);
  }
  &.ant-btn-primary,
  &.ant-btn {
    border-color: ${props => props.theme.primaryColor};
  }
`;

export const ButtonSave = styled(ButtonFooter)`
  border-color: ${props => (props.disable ? props.theme.colors.disableColor : props.theme.primaryColor)} !important;
  background-color: ${props => (props.disable ? props.theme.colors.disableColor : props.theme.primaryColor)} !important;
  color: ${props => props.theme.colors.white};

  &.ant-btn:hover,
  &.ant-btn:focus {
    color: ${props => props.theme.colors.white};
  }
`;
