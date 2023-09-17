import styled from 'styled-components';

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  //margin-left: -35px;
  //overflow: unset !important;
`;

export const StatusLabel = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  color: ${props =>
    props.active
      ? props.theme.colors.status.active
      : props.theme.colors.status.inActive};
`;
