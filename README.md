# inferno-bootstrap
Inferno components for Bootstrap 4. Ported from Reactstrap with some modifications.

View component docs at https://jhsware.github.io/inferno-bootstrap-docs/

## Compatibility

inferno-bootstrap 4.x supports Inferno v4 (master)

inferno-bootstrap 3.x supports Inferno v3 (InfernoV3 branch)

Reactstrap components not yet ported:
- Uncontrolled input components
- Media
- Fade
- Carousel
- Tooltip
- Form inline attribute (you can do it by adding bootstrap classes manually)

To understand how to use `inferno-bootstrap`, visit the component docs and the excellent Bootstrap 4 website. When confused, check out the source code and tests.

## Installation
To use `infern-bootstrap` you need to include the Bootstrap CSS files, but not any of the Bootstrap JavaScript.

```
$ npm install --save-prod inferno-bootstrap bootstrap@4
```

## Usage 
To use the components without transpiling you import from the `/dist` directory:

```JavaScript
// Cherry pick to reduce size
import Input from 'inferno-bootstrap/dist/Form/Input'

// Or keep it simple if you don't worry about file size
// (tree shaking only works with ES6 imports)
import { Input } from 'inferno-bootstrap'
```
 
You can get a nicer debugging experience by importing your components from the original source code
in the `/lib` directory. This requires that you transpile all imports from `node_module/inferno-bootstrap` and add the transpiling options found in the .babelrc config file at the root of this repos:

```JavaScript
// Cherry pick to reduce size
import Input from 'inferno-bootstrap/lib/Form/Input'

// Or use tree shaking
import { Input } from 'inferno-bootstrap/lib'
```

You will find a working webpack.config file in the folder `test/browser`. Don't forget to add your babel plugin devDepencies etc.

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
