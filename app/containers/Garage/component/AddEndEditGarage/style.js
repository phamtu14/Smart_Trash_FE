import styled from 'styled-components';
import { Form } from 'antd';
export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 23px 26px 0 20px;

  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    margin-right: 0px;
  }
`;
