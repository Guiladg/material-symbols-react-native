# material-symbols-react-native

An icon placer component for Google's Material Symbols to use with React Native.

Icons definitions are distributed as individual packages for reducing download size. Also, each icon can be imported separately to reduce build size.

It also works with ExpoGo.

## Installation

1. Make sure that you have installed the react-native-svg library.

   See https://github.com/react-native-community/react-native-svg#installation

2. Install this library.

```sh
npm install material-symbols-react-native
```

3. Install an icon definition package.

```sh
npm install @material-symbols-react-native/variant-000
```

<details><summary>Current available definitions</summary>

-  [variant: outlined / weight: 100](https://www.npmjs.com/package/@material-symbols-react-native/outlined-400)
-  [variant: outlined / weight: 200](https://www.npmjs.com/package/@material-symbols-react-native/outlined-200)
-  [variant: outlined / weight: 300](https://www.npmjs.com/package/@material-symbols-react-native/outlined-300)
-  [variant: outlined / weight: 400](https://www.npmjs.com/package/@material-symbols-react-native/outlined-400)
-  [variant: outlined / weight: 500](https://www.npmjs.com/package/@material-symbols-react-native/outlined-500)
-  [variant: outlined / weight: 600](https://www.npmjs.com/package/@material-symbols-react-native/outlined-600)
-  [variant: outlined / weight: 700](https://www.npmjs.com/package/@material-symbols-react-native/outlined-700)
-  [variant: rounded / weight: 100](https://www.npmjs.com/package/@material-symbols-react-native/rounded-100)
-  [variant: rounded / weight: 200](https://www.npmjs.com/package/@material-symbols-react-native/rounded-200)
-  [variant: rounded / weight: 300](https://www.npmjs.com/package/@material-symbols-react-native/rounded-300)
-  [variant: rounded / weight: 400](https://www.npmjs.com/package/@material-symbols-react-native/rounded-400)
-  [variant: rounded / weight: 500](https://www.npmjs.com/package/@material-symbols-react-native/rounded-500)
-  [variant: rounded / weight: 600](https://www.npmjs.com/package/@material-symbols-react-native/rounded-600)
-  [variant: rounded / weight: 700](https://www.npmjs.com/package/@material-symbols-react-native/rounded-700)
-  [variant: sharp / weight: 100](https://www.npmjs.com/package/@material-symbols-react-native/sharp-100)
-  [variant: sharp / weight: 200](https://www.npmjs.com/package/@material-symbols-react-native/sharp-200)
-  [variant: sharp / weight: 300](https://www.npmjs.com/package/@material-symbols-react-native/sharp-300)
-  [variant: sharp / weight: 400](https://www.npmjs.com/package/@material-symbols-react-native/sharp-400)
-  [variant: sharp / weight: 600](https://www.npmjs.com/package/@material-symbols-react-native/sharp-500)
-  [variant: sharp / weight: 500](https://www.npmjs.com/package/@material-symbols-react-native/sharp-600)
-  [variant: sharp / weight: 700](https://www.npmjs.com/package/@material-symbols-react-native/sharp-700)

</details>

## Usage

```js
import { MsIcon } from 'material-symbols-react-native';
import { msIconDefinition } from '@material-symbols-react-native/outlined-400';

<MsIcon icon={msIconDefinition} color="red" size={48} />;
```

In the above example, `msIconDefinition` is one of the icons provided by the definitions packages. The names of the icons are the same that can be found in [Material Symbols website](https://fonts.google.com/icons) but camel-cased and starting with `ms`. Filled option is made by adding `Fill` to the end of the name.

Icon name examples:

-  ms1KPlus
-  msArrowBack
-  msCheckBoxFill
-  msRadioButtonUncheckedFill

## Acknowledgements

This library uses the scripts of [material-design-icons](https://www.npmjs.com/package/@material-design-icons/scripts) for downloading Material Symbols SVG's. Outstanding job!

This library is inspired in the mechanics of [react-native-fontawesome](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome). By far, the most beautiful icons ever made!
