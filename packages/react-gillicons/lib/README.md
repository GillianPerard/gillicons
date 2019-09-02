# react-gillicons

A React library that permits to use all the icons from the **[gillicons](https://github.com/GillianPerard/gillicons)** package thanks to a uniq component.

## Icons

See [gillicons.gillianperard.com](https://gillicons.gillianperard.com).

## Installation

```sh
npm install gillicons react-gillicons --save

# or

yarn add gillicons react-gillicons
```

## How to use it

To use the **gillicon** component, you need to import the icons you want (from the **gillicons** package):

```js
import { giPlus } from 'gillicons/giPlus';
```

Or using destructuring:

```js
import { giPlus } from 'gillicons';
```

Then you need need to import the **gillicon** component:

```js
import Gillicon from 'react-gillicon'
```

Finally write in `jsx/tsx`:

```jsx
<Gillicon
    className="class-you-want"
    icon={giPlus}
    style={...} />
```

## License

This library is released under the terms of the [MIT License](./LICENSE).
