import React from 'react';
import PropTypes from 'prop-types';
import RangeInputCompound from './RangeInputCompound/RangeInputCompound';
import {
  RangeInputWrapper,
  RangeInputMinLabel,
  RangeInputMaxLabel,
  RangeInputLabelsContainer,
  RangeInputSliderContainer,
  RangeInputTrackDotLeft,
  RangeInputTrackDotRight,
  RangeInputTrackSlider
} from './RangeInput.styles';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import breakpoints from '../../shared/breakpoints';
import {
  puppyCyan,
  puppyCyanHover,
  puppyLightGrayAlpha,
  puppyLightGray,
  puppyBlue
} from '../../shared/colors';

const RangeInput = ({
  minLabelMobile,
  minLabelDesktop,
  maxLabelMobile,
  maxLabelDesktop,
  rangeMin,
  rangeMax,
  rangeStep,
  rangeValue,
  onInput,
  thumbColor,
  thumbHoverColor,
  thumbActiveColor,
  thumbBoxShadow,
  textColor,
  trackColor,
  handleCount,
  disabled
}) => {
  const windowWidth = useWindowWidth();

  const minLabel = () =>
    windowWidth > breakpoints.mobile ? minLabelDesktop : minLabelMobile;

  const maxLabel = () =>
    windowWidth > breakpoints.mobile ? maxLabelDesktop : maxLabelMobile;

  return (
    <RangeInputWrapper>
      <RangeInputLabelsContainer textColor={textColor}>
        <RangeInputMinLabel>{minLabel()}</RangeInputMinLabel>
        <RangeInputMaxLabel>{maxLabel()}</RangeInputMaxLabel>
      </RangeInputLabelsContainer>

      <RangeInputSliderContainer>
        <RangeInputTrackDotLeft trackColor={trackColor} />
        {handleCount === 2 ? (
          <RangeInputCompound
            rangeMin={rangeMin}
            rangeMax={rangeMax}
            onInput={onInput}
            disabled={disabled}
          />
        ) : (
          <RangeInputTrackSlider
            rangeMin={rangeMin}
            rangeMax={rangeMax}
            rangeStep={rangeStep}
            rangeValue={rangeValue}
            onInput={onInput}
            onChange={onInput} // also works
            thumbColor={thumbColor}
            thumbHoverColor={thumbHoverColor}
            thumbActiveColor={thumbActiveColor}
            thumbBoxShadow={thumbBoxShadow}
            trackColor={trackColor}
            disabled={disabled}
          />
        )}
        <RangeInputTrackDotRight trackColor={trackColor} />
      </RangeInputSliderContainer>
    </RangeInputWrapper>
  );
};

RangeInput.propTypes = {
  /** Custom parent class */
  className: PropTypes.string,
  onInput: PropTypes.func.isRequired,
  rangeValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    .isRequired,
  disabled: PropTypes.bool,
  /** Range input minimum */
  rangeMin: PropTypes.string,
  /** Range input maximum */
  rangeMax: PropTypes.string,
  /** Range input step */
  rangeStep: PropTypes.string,
  /** Slider min labels */
  minLabelMobile: PropTypes.string,
  minLabelDesktop: PropTypes.string,
  /** Slider max labels */
  maxLabelMobile: PropTypes.string,
  maxLabelDesktop: PropTypes.string,
  /** Color of slider thumb */
  thumbColor: PropTypes.string,
  /** Hover color of slider thunb */
  thumbHoverColor: PropTypes.string,
  /** Active color of slider thunb */
  thumbActiveColor: PropTypes.string,
  /** Box shadow of slider thunb */
  thumbBoxShadow: PropTypes.string,
  /** Color of slider text */
  textColor: PropTypes.string,
  /** Color of slider track */
  trackColor: PropTypes.string,
  /** Number of slider handles */
  handleCount: PropTypes.oneOf([1, 2])
};

RangeInput.defaultProps = {
  handleCount: 1,
  rangeMin: '0',
  rangeMax: '10',
  rangeStep: '0.1',
  minLabelMobile: '0',
  minLabelDesktop: 'Unimportant',
  maxLabelMobile: '10',
  maxLabelDesktop: 'Important',
  thumbColor: puppyCyan,
  textColor: puppyCyan,
  thumbHoverColor: puppyCyanHover,
  thumbActiveColor: puppyBlue,
  thumbBoxShadow: puppyLightGrayAlpha(0.5),
  trackColor: puppyLightGray,
  disabled: false
};

export default RangeInput;
