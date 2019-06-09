import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

  const defaultStyles = {
    transition: 'all 250ms'
  };
  const textStyles = {
    color,
    fontSize,
    fontFamily,
    fontWeight,
    ...defaultStyles,
    ...customStyles
  };
  const hoverTextStyles = { ...textStyles, ...hoverStyles };
  const [hovered, setHovered] = useState(false);
  return (
    <Tag
      className={className}
      style={hovered ? hoverTextStyles : textStyles}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {text}
    </Tag>
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

export default Text;
