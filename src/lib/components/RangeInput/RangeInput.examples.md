RangeInput examples:

###### Default

```js
import { useState } from 'react';
import { RangeInput } from 'puppy-components-again';

const renderVal = val => <pre style={{textAlign: 'center'}}><code>{val}</code></pre>

const App = () => {
  const [rangeValue, setRangeValue] = useState('5');
  return (
    <>
      {renderVal(rangeValue)}
      <RangeInput 
        onInput={({target}) => setRangeValue(target.value)}
        rangeValue={rangeValue} />
    </>
  );
};
<App />;
```

###### Compound Input Slider


```js
import { useState } from 'react';
import { RangeInput } from 'puppy-components-again';

const fmt = val => (
  val.map((num, i) => {
    return `${i ? 'max:' : 'min:'} ${num.toFixed(1)}`
  }).join(" | ")
)

const renderVal = val => <pre style={{textAlign: 'center'}}><code>{fmt(val)}</code></pre>


const App = () => {
  const handleCount = 2;
  const [rangeValue, setRangeValue] = useState([2.5, 7.5]);
  return (
    <>
      {renderVal(rangeValue)}
      <RangeInput 
        onInput={(e) => setRangeValue(e)}
        rangeValue={rangeValue}
        rangeMin="0"
        rangeMax="10"
        handleCount={2} />
    </>
  )
};
<App />;
```
