import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  font-size: 14px;
  display: flex;
  position: relative;
  svg {
    position: absolute;
    height: 20px;
    width: 20px;
    left: 4px;
    top: 5px;
    z-index: 1;
    fill: ${({ checkColor }) => checkColor};
  }
`;

export const CheckboxInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
  display: none;
  box-sizing: border-box;
  padding: 0;
  overflow: visible;
  &:checked + label:before {
    background: ${({ checkboxActiveBackgroundColor }) =>
      checkboxActiveBackgroundColor};
    border: ${({ checkboxActiveBorderColor }) =>
      `1px solid ${checkboxActiveBorderColor}`};
  }

  &:checked + label:after {
    font-family: 'zf-ui-icons';
    content: '\\e901';
    color: ${({ checkboxActiveBackgroundColor }) =>
      checkboxActiveBackgroundColor};
    position: absolute;
    top: -1px;
    left: 3px;
    font-size: 23px;
    cursor: pointer;
  }
`;

export const CheckboxLabel = styled.label`
  user-select: none;
  display: flex;
  align-items: center;
  color: ${({ checkboxLabelColor }) => checkboxLabelColor};
  &:before {
    content: '';
    display: inline-block;
    width: 26px;
    height: 26px;
    border-radius: 0;
    background: ${({ checkboxBackgroundColor }) => checkboxBackgroundColor};
    border: ${({ checkboxBorderColor }) => `1px solid ${checkboxBorderColor}`};
    margin-right: 10px;
    cursor: pointer;
  }
`;
