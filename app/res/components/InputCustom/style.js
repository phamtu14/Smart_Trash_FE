import styled from 'styled-components';
import { Input } from 'antd';

const InputText = styled(Input)`
  height: 40px;
  //width: 100%;

  &.ant-input {
    outline: none;
    padding-left: 10px;
    font-size: 1em;
    font-style: normal;
    box-sizing: border-box;
  }

  input.ant-input {
    color: #212529;

    ::placeholder {
      color: #212529;
    }

    ::-webkit-input-placeholder {
      /* Edge */
      color: #212529;
    }
  }

  &.ant-input:focus,
  &.ant-input-focused {
    box-shadow: none;
  }
`;

export { InputText };
