import styled from 'styled-components';
import { Button, Modal } from 'antd';

const CustomHistoryModal = styled(Modal)`
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

  .ant-modal-content {
    margin: auto;
    border-radius: 12px;
  }

  .ant-modal-header {
    padding: 14px 20px;
    height: 45px;
    background: #219653;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }

  .ant-modal-title {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: center;
    line-height: 18px;
    font-family: Open Sans;
    color: white;
  }

  .ant-modal-body {
    height: 400px;
    padding: 24px 24px 0px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
  }

  .ant-modal-footer {
    padding: 16px 20px 20px;
    border-top: 0px;
  }

  .ant-table-tbody > tr > td {
    transition: none;
    height: 45px;
  }
`;

const ButtonTest = styled(Button)`
  background-color: #219653;
  color: #ffffff;
  border-radius: 12px;
  width: 102px;
  height: 40px;
  font-weight: 600;
  //&:hover {
  //  background-color: black;
  //  color: white;
  //}
`;

export { CustomHistoryModal, ButtonTest };
