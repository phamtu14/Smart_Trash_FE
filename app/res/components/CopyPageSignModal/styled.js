import styled from 'styled-components';
import { Modal, Col, Radio, Divider } from 'antd';

const CustomCopyModal = styled(Modal)`
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
    padding: 24px;
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

export const Container = styled.div`
  display: flex;
  overflow-y: overlay;
  flex-direction: column;
  gap: 20px;
`;

export const RadioGroup = styled(Radio.Group)`
  width: 100%;
  .ant-radio-group {
    width: 100%;
  }
`;

export const DividerCustom = styled(Divider)`
  margin: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;
export const RadioLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RadioLayoutItem = styled.div`
  width: 70%;
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ColIcon = styled(Col)`
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

export const ColBold = styled(Col)`
  font-weight: bold;
  color: ${props => props.theme.colors.colorText};
`;

export { CustomCopyModal };
