import styled from 'styled-components';
import { Input } from 'antd';
export const InputFieldWrapper = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  gap: 0 16px;

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-right-width: 0 !important;
  }
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    box-shadow: none !important;
  }
`;

export const SearchCustom = styled.div`
  width: 610px;
  margin-right: 16px;
  border: none !important;
`;

export const InputCustom = styled(Input)`
  background-color: transparent;
  font-size: 14px;

  &.ant-input-affix-wrapper {
    border: 1px solid #c5ced9 !important;
    height: 40px;
    border-radius: 12px !important;
    width: 610px !important;
  }

  &.ant-select-selection-search-input {
    border: 1px solid #c5ced9;
  }

  svg path {
    fill: #626262;
  }

  .ant-input-clear-icon {
    display: flex;
    font-size: 20px;
  }

  input::placeholder {
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.placeholder};
  }
`;
