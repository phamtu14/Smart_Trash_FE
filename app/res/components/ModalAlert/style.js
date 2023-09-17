import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalWrapper = styled(Modal)`
  .ant-modal-root .ant-modal-header {
    background-color: ${props => props.theme.colors.modal.background};
  }
  [class*='ant-modal-header'] {
    justify-content: flex-start !important;
  }
  .ant-modal-content {
    border-radius: 12px;
    width: calc(100%);
  }
  .ant-modal-body {
    padding: 0;
  }
  .ant-modal-footer {
    padding-top: 16px;
    padding-bottom: 20px;
    border-top: none;
  }

  .ant-modal-close-x {
    cursor: pointer;
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: ${props => props.theme.colors.white};
    margin-top: 4px;
    margin-right: 6px;
  }
`;

export const DivFooter = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  font-style: normal;
  font-weight: 400;
  justify-content: center;
  font-size: 1.07142em;
  line-height: 20px;
  align-items: center;
`;
