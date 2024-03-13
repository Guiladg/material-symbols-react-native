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

3. Install an icon definition package, e.g.: [variant: outlined / weight: 400](https://www.npmjs.com/package/@material-symbols-react-native/outlined-400).

```sh
npm install @material-symbols-react-native/outlined-400
```

## Usage

```js
import { MsIcon } from 'material-symbols-react-native';
import { msIconDefinition } from '@material-symbols-react-native/outlined-400';

<MsIcon icon={msIconDefinition} color={red} size={48} />;
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
