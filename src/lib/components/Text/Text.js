import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextGlobalStyles } from './Text.styles';

const Text = ({
  color,
  className,
  fontFamily,
  fontSize,
  fontWeight,
  tag,
  text,
  customStyles,
  hoverStyles
}) => {
  /* html tag defined dynamically */
  const Tag = `${tag}`;
  const textStyles = {
    color,
    fontSize,
    fontFamily,
    fontWeight,
    ...customStyles
  };
  const hoverTextStyles = { ...textStyles, ...hoverStyles };
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <TextGlobalStyles textStyles={textStyles} hoverStyles={hoverStyles} />
      <Tag
        className={className}
        style={hovered ? hoverTextStyles : textStyles}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        {text}
      </Tag>
    </>
  );
};

Text.propTypes = {
  /** Custom class */
  className: PropTypes.string,
  /** Custom color for Text */
  color: PropTypes.string,
  /** Font family */
  fontFamily: PropTypes.string,
  /** Font weight */
  fontWeight: PropTypes.string,
  /** Font size */
  fontSize: PropTypes.string,
  /** HTML tag for Text SEO */
  tag: PropTypes.string,
  /** Text content for Text */
  text: PropTypes.string,
  /** More custom styles */
  customStyles: PropTypes.object,
  /** Hover styles */
  hoverStyles: PropTypes.object
};

Text.defaultProps = {
  tag: 'p',
  color: 'inherit',
  fontFamily: '"Prometo", Verdana, Arial, Helvetica, sans-serif',
  fontSize: '16px',
  fontWeight: '500'
};

export default Text;
