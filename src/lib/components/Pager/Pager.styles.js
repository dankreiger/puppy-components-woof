import styled from 'styled-components';

export const PagerContainer = styled.div`
  display: flex;
`;

export const PagerItem = styled.div`
  background: ${({ active, activeColor, color }) =>
    active ? activeColor : color};
  width: 8px;
  height: 8px;
  border: ${({ activeColor }) => `2px solid ${activeColor}`};
  border-radius: 50%;
  transition: all 250ms;
  &:not(:first-child) {
    margin-left: 10px;
  }
`;
