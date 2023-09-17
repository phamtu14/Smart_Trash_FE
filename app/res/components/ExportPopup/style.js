import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  flex-direction: column;
  gap: 20px;
  padding: 0 25px;
`;

export const StyleTextExport = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextExport = styled.span`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const SpanBold = styled.span`
  font-weight: 1000;
`;

export const TextExportAlert = styled.span`
  i {
    font-size: 15px;
  }
`;
