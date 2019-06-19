Checkbox examples:

###### color scheme

```js
import { Checkbox } from 'puppy-components-woof';

const handleOnChange = checked => {
  console.log('checked: ', checked)
}
<Checkbox name="yes" label="Yes" onChange={handleOnChange} />;
```
