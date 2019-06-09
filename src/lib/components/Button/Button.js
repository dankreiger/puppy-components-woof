import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled, ButtonLinkStyled } from './Button.styles';
import {
  puppyCyanHover,
  puppyCyan,
  puppyBlue,
  puppyLightGray
} from '../../shared/colors';

const Button = ({
  className,
  customStyles,
  onClick,
  disabled,
  color,
  colorHover,
  colorActive,
  bgColor,
  bgColorHover,
  bgColorActive,
  bgColorDisabled,
  href,
  tag,
  target,
  text
}) => {
  /* html tag defined dynamically */
  if (tag === 'a') {
    return (
      <ButtonLinkStyled
        href={href}
        target={target}
        className={className}
        customStyles={customStyles}
        color={color}
        bgColor={bgColor}
        bgColorHover={bgColorHover}
        bgColorActive={bgColorActive}
        bgColorDisabled={bgColorDisabled}
        disabled={disabled}
      >
        {text}
      </ButtonLinkStyled>
    );
  } else {
    return (
      <ButtonStyled
        className={className}
        onClick={onClick}
        disabled={disabled}
        color={color}
        colorHover={colorHover}
        colorActive={colorActive}
        bgColor={bgColor}
        bgColorHover={bgColorHover}
        bgColorActive={bgColorActive}
        bgColorDisabled={bgColorDisabled}
        customStyles={customStyles}
      >
        {text}
      </ButtonStyled>
    );
  }
};

Button.propTypes = {
  className: PropTypes.string,
  customStyles: PropTypes.object,
  onClick: PropTypes.func,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  colorActive: PropTypes.string,
  bgColor: PropTypes.string,
  bgColorHover: PropTypes.string,
  bgColorActive: PropTypes.string,
  bgColorDisabled: PropTypes.string,
  /** Disable the button */
  disabled: PropTypes.bool,
  /** href for links */
  href: PropTypes.string,
  /** Target for links (attribute or framename as custom string) */
  target: PropTypes.oneOf([
    '_blank',
    '_parent',
    '_top',
    '_self',
    PropTypes.string
  ]),
  /** HTML tag for button */
  tag: PropTypes.oneOf(['button', 'a']),
  /** Text of the button */
  text: PropTypes.string
};

Button.defaultProps = {
  onClick: e => e.preventDefault(),
  disabled: false,
  text: 'Click Me'
};

export default Button;
