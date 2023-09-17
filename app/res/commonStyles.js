import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${props => (props.showAdvanceSearch ? 'calc(100% - 300px)' : '100%')};
  padding: 16px 20px;
  background: ${props => props.theme.colors.background};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  transition: width 0.2s ease-in-out;
`;

export const AdvanceSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  padding: 0 20px;
  background: ${props => props.theme.colors.backgroundAdvanceSearch};
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
export const TitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.extraLarge};
`;

export const CloseAdvanceView = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0;
`;

export const HeaderAdvanceView = styled.div`
  display: flex;
  gap: 4px;
  margin: 15px 0;
`;

export const TitleAdvance = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.primaryColor};
`;

export const ContentAdvanceView = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;
