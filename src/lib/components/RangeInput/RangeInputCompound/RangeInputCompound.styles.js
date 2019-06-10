import styled from 'styled-components';
import {
  puppyCyan,
  puppyCyanHover,
  puppyBlue,
  puppyLightGray,
  puppyLightGrayAlpha
} from '../../../shared/colors';

export const RangeInputCompoundWrapper = styled.div`
  margin: 0 auto;
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const RangeInputSliderRailInner = styled.div`
  position: absolute;
  width: 104%;
  height: 2px;
  transform: translate(-2%, -50%);
  border-radius: 7px;
  pointer-events: none;
  background-color: ${puppyLightGray};
`;

export const RangeInputSliderRailOuter = styled.div`
  position: absolute;
  width: 104%;
  height: 42px;
  transform: translate(-2%, -50%);
  border-radius: 7px;
  cursor: pointer;
`;

export const RangeInputHandleContainer = styled.div`
  left: ${({ percent }) => `${percent}%`};
  position: absolute;
  transform: translate(-50%, -50%);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  z-index: 5;
  width: 28px;
  height: 42px;
  cursor: pointer;
  background-color: transparent;
  &:hover + div {
    border-color: ${({ disabled }) =>
      disabled ? puppyLightGray : puppyCyanHover};
  }
  &:active + div {
    box-shadow: none;
    border-color: ${({ disabled }) => (disabled ? puppyLightGray : puppyBlue)};
  }
`;

export const RangeInputHandleSlider = styled.div.attrs(
  ({ ariaValuemin, ariaValuemax, ariaValuenow, rangeValue }) => ({
    role: 'slider',
    'aria-valuemin': ariaValuemin,
    'aria-valuemax': ariaValuemax,
    'aria-valuenow': ariaValuenow,
    value: rangeValue
  })
)`
  left: ${({ percent }) => `${percent}%`};
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 10px;
  height: 10px;
  border: 15px solid
    ${({ disabled }) => (disabled ? puppyLightGray : puppyCyan)};
  border-radius: 50%;
  box-shadow: 0px 0px 0px 1px ${puppyLightGrayAlpha(0.5)};
  background-color: ${({ disabled }) => (disabled ? puppyLightGray : '#fff')};
`;

export const RangeInputTrackContainer = styled.div`
  position: absolute;
  transform: translate(0%, -50%);
  height: 2px;
  z-index: 1;
  background-color: ${({ disabled }) =>
    disabled ? puppyLightGray : puppyCyan};
  border-radius: 7px;
  cursor: pointer;
  left: ${({ source }) => `${source.percent}%`};
  width: ${({ target, source }) => `${target.percent - source.percent}%`};
`;
