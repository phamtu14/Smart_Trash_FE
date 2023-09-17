import { Popover } from 'antd';
import styled from 'styled-components';
const IconUser = styled.img`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 30px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const PopoverCustom = styled(Popover)`
  .ant-popover-inner-content {
    padding: 0;
  }
`;

export { IconUser, PopoverCustom };
