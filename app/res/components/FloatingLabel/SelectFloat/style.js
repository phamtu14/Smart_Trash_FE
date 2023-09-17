import styled from 'styled-components';
import { Select } from 'antd';

export const SelectFloatStyle = styled(Select)`
  width: 100%;
  height: 40px;
  &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px;
    border-radius: 8px;
  }

  .ant-select-selection-placeholder {
    line-height: 40px !important;
  }

  .ant-select-selection-item {
    line-height: 40px !important;
  }
  &.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    font-weight: 600;
    background: rgba(33, 37, 41, 0.3);
  }
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: none;
  }
`;
