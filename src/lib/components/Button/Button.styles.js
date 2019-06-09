import styled from 'styled-components';

const buttonStyles = (
  color,
  colorHover,
  colorActive,
  bgColor,
  bgColorHover,
  bgColorActive,
  bgColorDisabled,
  disabled
) => `
  font-family: 'Prometo', Verdana, Arial, Helvetica, sans-serif;
  background-color: ${disabled ? bgColorDisabled : bgColor};
  font-weight: 500;
  color: ${color};
  border-radius: 30px;
  font-size: 16px;
  border: none;
  padding: 16px 24px 18px;
  transition: background-color 250ms;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  &:hover {
    color: ${colorHover};
    background-color: ${disabled ? bgColorDisabled : bgColorHover};
    outline: none;
  }
  &:active {
    color: ${colorActive};
    background-color: ${disabled ? bgColorDisabled : bgColorActive};
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonStyled = styled.button`
  ${({ customStyles }) => customStyles};
  ${({
    color,
    colorHover,
    colorActive,
    bgColor,
    bgColorHover,
    bgColorActive,
    bgColorDisabled,
    disabled
  }) =>
    buttonStyles(
      color,
      colorHover,
      colorActive,
      bgColor,
      bgColorHover,
      bgColorActive,
      bgColorDisabled,
      disabled
    )}
`;

export const ButtonLinkStyled = styled.a`
  ${({
    color,
    colorHover,
    colorActive,
    bgColor,
    bgColorHover,
    bgColorActive,
    bgColorDisabled,
    disabled
  }) =>
    buttonStyles(
      color,
      colorHover,
      colorActive,
      bgColor,
      bgColorHover,
      bgColorActive,
      bgColorDisabled,
      disabled
    )}
  text-decoration: none;
  display: inline-block;
  ${({ customStyles }) => customStyles};
`;
