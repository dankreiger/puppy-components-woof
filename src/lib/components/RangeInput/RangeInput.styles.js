import styled from 'styled-components';
import { puppyCyan, puppyLightGray } from '../../shared/colors';

const rangeInputStyles = (
  thumbColor,
  trackColor,
  thumbHoverColor,
  thumbActiveColor,
  disabled,
  thumbBoxShadow
) => ({
  track: `
  background: ${trackColor};
  height: 2px;
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: ${disabled ? 'not-allowed' : 'grab'};
  cursor: ${disabled ? 'not-allowed' : '-moz-grab'};
  cursor: ${disabled ? 'not-allowed' : '-webkit-grab'};
  border: 0;
  z-index: 1;
  `,
  thumb: `
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${disabled ? puppyLightGray : '#ffffff'};
  margin: 0;
  box-shadow: ${thumbBoxShadow} 0px 0px 0px 1px;
  transition: border-color 250ms;
  &:hover {
    
    border-color: ${disabled ? puppyLightGray : thumbHoverColor};
  }
  &:active {
    cursor: ${disabled ? 'not-allowed' : 'grabbing'};
    cursor: ${disabled ? 'not-allowed' : '-moz-grabbing'};
    cursor: ${disabled ? 'not-allowed' : '-webkit-grabbing'};
    border-color: ${disabled ? disabled : thumbActiveColor};
    box-shadow: none;
  }
  `
});

const RangeInputLabel = styled.div`
  font-family: 'Prometo', Verdana, Arial, Helvetica, sans-serif;
  font-weight: 500;
`;

const RangeInputTrackDot = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ trackColor }) => trackColor};
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE10+ styles */
    display: none;
  }
`;

export const RangeInputWrapper = styled.div``;

export const RangeInputLabelsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  color: ${({ textColor }) => textColor};
  font-size: 20px;
`;

export const RangeInputMaxLabel = styled(RangeInputLabel)``;
export const RangeInputMinLabel = styled(RangeInputLabel)``;
export const RangeInputSliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const RangeInputTrackDotLeft = styled(RangeInputTrackDot)``;
export const RangeInputTrackDotRight = styled(RangeInputTrackDot)``;

export const RangeInputTrackSlider = styled.input.attrs(
  ({ rangeMin, rangeMax, rangeStep, rangeValue }) => ({
    type: 'range',
    min: rangeMin,
    max: rangeMax,
    step: rangeStep,
    value: rangeValue
  })
)`

  background-color: transparent;
  -webkit-appearance: none;
  width: 100%;
  margin: 3px -10px;
  position: relative;
  height: 30px;
  z-index: 1;
  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }

  /* Webkit Track */
  &::-webkit-slider-runnable-track {
    ${({
      thumbColor,
      trackColor,
      thumbHoverColor,
      thumbActiveColor,
      disabled,
      thumbBoxShadow
    }) =>
      rangeInputStyles(
        thumbColor,
        trackColor,
        thumbHoverColor,
        thumbActiveColor,
        disabled,
        thumbBoxShadow
      ).track}
  }

  /* Webkit Thumb */
  &::-webkit-slider-thumb {
    ${({
      thumbColor,
      trackColor,
      thumbHoverColor,
      thumbActiveColor,
      disabled,
      thumbBoxShadow
    }) =>
      rangeInputStyles(
        thumbColor,
        trackColor,
        thumbHoverColor,
        thumbActiveColor,
        disabled,
        thumbBoxShadow
      ).thumb}
    margin-top: -20px;
    width: 40px;
    height: 40px;
    -webkit-appearance: none;
    border: ${({ thumbColor, disabled }) =>
      `15px solid ${disabled ? puppyLightGray : thumbColor}`};
  }
  /* Mozilla Track */
  &::-moz-range-track {
    ${({
      thumbColor,
      trackColor,
      thumbHoverColor,
      thumbActiveColor,
      disabled,
      thumbBoxShadow
    }) =>
      rangeInputStyles(
        thumbColor,
        trackColor,
        thumbHoverColor,
        thumbActiveColor,
        disabled,
        thumbBoxShadow
      ).track}
  }
  /* Mozilla Thumb */
  &::-moz-range-thumb {
    ${({
      thumbColor,
      trackColor,
      thumbHoverColor,
      thumbActiveColor,
      disabled,
      thumbBoxShadow
    }) =>
      rangeInputStyles(
        thumbColor,
        trackColor,
        thumbHoverColor,
        thumbActiveColor,
        disabled,
        thumbBoxShadow
      ).thumb}
  }
  /* Microsoft Track */
  &::-ms-track {
    ${({
      thumbColor,
      trackColor,
      thumbHoverColor,
      thumbActiveColor,
      disabled,
      thumbBoxShadow
    }) =>
      rangeInputStyles(
        thumbColor,
        trackColor,
        thumbHoverColor,
        thumbActiveColor,
        disabled,
        thumbBoxShadow
      ).track}
    color: transparent;
  }
  /* Microsoft Thumb */
  &::-ms-thumb {
    ${({
      thumbColor,
      trackColor,
      thumbHoverColor,
      thumbActiveColor,
      disabled,
      thumbBoxShadow
    }) =>
      rangeInputStyles(
        thumbColor,
        trackColor,
        thumbHoverColor,
        thumbActiveColor,
        disabled,
        thumbBoxShadow
      ).thumb}
    background-color: ${({ thumbColor, disabled }) =>
      disabled ? puppyLightGray : thumbColor};
  }
  /* Microsoft Tooltip */
  &::-ms-tooltip {
    display: none;
  }
`;
