# angular-gillicons

An Angular library that permits to use all the icons from the **[gillicons](https://github.com/GillianPerard/gillicons)** package thanks to a uniq component.

## Icons

See [gillicons.gillianperard.com](https://gillicons.gillianperard.com).

## Installation

```sh
npm install gillicons angular-gillicons --save
# or
yarn add gillicons angular-gillicons
```

## How to use it

To use the **gillicon** component, you need to add the gillicon module to your own module.

```ts
import { GilliconModule } from 'angular-gillicons';

@NgModule({
    declarations: [
        ...
    ],
    imports: [
        ...,
        GilliconModule // import the gillicon module
    ],
    bootstrap: [
        ...
    ]
})
export class YourModule { }
```

Then you need to import the icons you want (from the **gillicons** package) into the desired component.

Directly:

```ts
import { giPlus } from 'gillicons/giPlus';
```

Or using destructuring:

```ts
import { giPlus } from 'gillicons';
```

Assign the imported icon to a property which could be used in you **html** file.

```ts
public giPlus = giPlus;
```

Finally use it within the gillicon component:

```html
<gillicon [icon]="giPlus"></gillicon>
```

## License

This library is released under the terms of the [MIT License](LICENSE).
