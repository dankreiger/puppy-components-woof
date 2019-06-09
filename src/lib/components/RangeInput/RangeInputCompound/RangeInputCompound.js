import React, { Component } from 'react';
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider';
import { SliderRail, Handle, Track } from './rangeInputCustomComponents';
import { puppyLightGray } from '../../../shared/colors';
import { RangeInputCompoundWrapper } from './RangeInputCompound.styles';

const RangeInputCompound = ({ rangeMin, rangeMax, onInput, disabled }) => {
  const sliderStyle = {
    position: 'relative',
    width: 'calc(100% - 20px)',
    margin: '0 auto'
  };

  const safeRangeMin = parseFloat(rangeMin);
  const safeRangeMax = parseFloat(rangeMax);

  const domain = [safeRangeMin, safeRangeMax];
  const midPoint = (safeRangeMin + safeRangeMax) / 2;
  const defaultValues = [midPoint / 2, (midPoint + safeRangeMax) / 2];

  return (
    <RangeInputCompoundWrapper>
      <Slider
        mode={2}
        domain={domain}
        rootStyle={sliderStyle}
        onUpdate={onInput}
        onChange={onInput}
        values={defaultValues}
        disabled={disabled}
      >
        <Rail>
          {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  getHandleProps={getHandleProps}
                  disabled={disabled}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  disabled={disabled}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
      </Slider>
    </RangeInputCompoundWrapper>
  );
};

export default RangeInputCompound;
