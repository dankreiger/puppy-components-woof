import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CheckboxWrapper,
  CheckboxInput,
  CheckboxLabel
} from './Checkbox.styles';

// TODO: replace svg with font icon
const Checkbox = ({
  className,
  name,
  label,
  checked,
  onChange,
  checkboxBorderColor,
  checkboxLabelColor,
  checkboxBackgroundColor,
  checkboxActiveBackgroundColor,
  checkboxActiveBorderColor,
  checkColor
}) => {
  const [isChecked, handleIsChecked] = useState(checked);

  const handleChecked = val => {
    handleIsChecked(val);
    onChange(val);
  };

  return (
    <CheckboxWrapper
      checkColor={checkColor}
      onClick={() => handleChecked(!isChecked)}
      className={className}
    >
      {isChecked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
        </svg>
      )}
      <CheckboxInput
        checkboxActiveBackgroundColor={checkboxActiveBackgroundColor}
        checkboxActiveBorderColor={checkboxActiveBorderColor}
        onChange={handleChecked}
        name={name}
        type="checkbox"
        checked={isChecked}
      />
      {label && (
        <CheckboxLabel
          checkColor={checkColor}
          checkboxBackgroundColor={checkboxBackgroundColor}
          checkboxBorderColor={checkboxBorderColor}
          checkboxLabelColor={checkboxLabelColor}
        >
          {label}
        </CheckboxLabel>
      )}
    </CheckboxWrapper>
  );
};

Checkbox.propTypes = {
  /** Custom class */
  className: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  /** Function to handle form state */
  onChange: PropTypes.func.isRequired,
  checkboxBorderColor: PropTypes.string,
  checkboxLabelColor: PropTypes.string,
  checkboxBackgroundColor: PropTypes.string,
  checkboxActiveBackgroundColor: PropTypes.string,
  checkboxActiveBorderColor: PropTypes.string,
  checkColor: PropTypes.string
};

Checkbox.defaultProps = {
  className: '',
  checked: false,
  checkboxBorderColor: '#bfbfbf',
  checkboxLabelColor: '#333333',
  checkboxBackgroundColor: '#fff',
  checkboxActiveBackgroundColor: '#00abe7',
  checkboxActiveBorderColor: '#00abe7',
  checkColor: '#fff'
};

export default Checkbox;
