import React from 'react';
import { useCountUp } from 'react-countup';
import PropTypes from 'prop-types';
import { CounterElement } from './Counter.styles';

const Counter = ({ showStartButton, className }) => {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    start: 0,
    end: 10,
    delay: 0,
    decimals: 1,
    decimal: ',',
    duration: 1,
    onReset: () => console.log('Resetted!'),
    onUpdate: () => console.log('Updated!'),
    onPauseResume: () => console.log('Paused or resumed!'),
    onStart: ({ pauseResume }) => console.log('onStart'),
    onEnd: ({ pauseResume }) => console.log('onEnd')
  });
  return (
    <div>
      <CounterElement className={className}>{countUp}</CounterElement>
      {showStartButton && <button onClick={start}>Start</button>}
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={() => update(2000)}>Update to 2000</button>
    </div>
  );
};

Counter.propTypes = {
  className: PropTypes.string,
  endCount: PropTypes.number,
  /** Optionally enable start button */
  showStartButton: PropTypes.bool
};

Counter.defaultProps = {
  className: 'countUp',
  showStartButton: true
};

export default Counter;
