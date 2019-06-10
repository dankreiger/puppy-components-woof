import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  RangeInputTrackContainer,
  RangeInputSliderRailInner,
  RangeInputSliderRailOuter,
  RangeInputHandleContainer,
  RangeInputHandleSlider
} from './RangeInputCompound.styles';
import { puppyBlue, puppyLightGray, puppyCyan } from '../../../shared/colors';

// *******************************************************
// RAIL
// *******************************************************

export function SliderRail({ getRailProps }) {
  return (
    <Fragment>
      <RangeInputSliderRailOuter {...getRailProps()} />
      <RangeInputSliderRailInner />
    </Fragment>
  );
}

SliderRail.propTypes = {
  getRailProps: PropTypes.func.isRequired
};

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
export function Handle({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
  disabled
}) {
  return (
    <Fragment>
      <RangeInputHandleContainer
        disabled={disabled}
        percent={percent}
        {...getHandleProps(id)}
      />
      <RangeInputHandleSlider
        ariaValuemin={min}
        ariaValuemax={max}
        ariaValuenow={value}
        percent={percent}
        disabled={disabled}
      />
    </Fragment>
  );
}

Handle.propTypes = {
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Handle.defaultProps = {
  disabled: false
};

// *******************************************************
// TRACK COMPONENT
// *******************************************************
export function Track({ source, target, getTrackProps, disabled }) {
  return (
    <RangeInputTrackContainer
      disabled={disabled}
      source={source}
      target={target}
      {...getTrackProps()}
    />
  );
}

Track.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  target: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getTrackProps: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Track.defaultProps = {
  disabled: false
};
