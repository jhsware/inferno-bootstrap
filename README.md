# inferno-bootstrap
Inferno components for Bootstrap 4. Ported from Reactstrap with some modifications.

View component docs at https://jhsware.github.io/inferno-bootstrap-docs/

## Compatibility

inferno-bootstrap >= 0.4.x supports Inferno v4

Reactstrap components not yet ported:
- Uncontrolled input components
- Media
- Fade
- Carousel
- Tooltip
- Form inline attribute (you can do it by adding bootstrap classes manually)

To understand how to use this, check the docs, the excellent Bootstrap 4 website and the source code.

## Installation
To use `infern-bootstrap` you need to include the Bootstrap CSS files, but not any of the Bootstrap JavaScript.

```
$ npm install --save-prod inferno-bootstrap bootstrap@4
```

## Usage 
To use the components without requiring transpilation you import from the `/dist` directory:

```JavaScript
// Cherry pick to reduce size
import Input from 'inferno-bootstrap/dist/Form/Input'

// Or keep it simple if you don't worry about file size
// (tree shaking only works with ES6 imports)
import { Input } from 'inferno-bootstrap'
```
 
You can get a nicer debugging experience by importing your
components from the original source code in the `/lib` directory. However this requires that you transpile `node_module/inferno-bootstrap` imports and add the settinggs in the .babelrc config file from this repos to your project:

```JavaScript
// Cherry pick to reduce size
import Input from 'inferno-bootstrap/lib/Form/Input'

// Or use tree shaking
import { Input } from 'inferno-bootstrap/lib'
```

You will find a working webpack.config file in the folder `test/browser`. Don't forget to add your .babelrc
file and babel package devDepencies.

## Animations ##
This package uses the standard bootstrap CSS-animations with the help of the [inferno-animation](https://github.com/jhsware/inferno-animation) library.

To create basic bootstrap style animations for your own components, check out the source code of 
`Collapse.js` and `AnimateModal.js`. If you want to create CSS animations with different behaviour on enter
and leave, take a look at the animation helpers in `inferno-animation`.

## Generate Off-line Docs ##
To generate off-line docs, clone the repos and run:

```
$ npm run build-test
$ ./scripts/generateDocs.sh
```

Your docs will be placed in `project/docs`.

TODO: Implement https://github.com/reactstrap/reactstrap/commit/5c5c2056b08b21502d8543e54cbc5341c966bf33
