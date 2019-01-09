# inferno-bootstrap
[![Build Status](https://travis-ci.org/jhsware/inferno-bootstrap.svg?branch=master)](https://travis-ci.org/jhsware/inferno-bootstrap)
[![gzip size](http://img.badgesize.io/https://unpkg.com/inferno-bootstrap/dist/cjs/index.min.js?compression=gzip)](https://unpkg.com/inferno-bootstrap/dist/cjs/index.min.js)

Inferno components for Bootstrap 4. Ported from Reactstrap with some modifications.

View component docs at https://jhsware.github.io/inferno-bootstrap-docs/

## Upgrade notes
NOTE! If you have cherry picked from /dist, please change to /lib

## Compatibility
inferno-bootstrap 7.x supports Inferno v7

inferno-bootstrap 6.x supports Inferno v6

inferno-bootstrap 5.x supports Inferno v5

inferno-bootstrap 4.x supports Inferno v4

inferno-bootstrap 3.x supports Inferno v3 (code in InfernoV3 branch)

Reactstrap components not yet ported:
- Uncontrolled input components
- ~Media~ DONE
- Fade
- Carousel
- Form inline attribute (you can do it by adding bootstrap classes manually)

To understand how to use `inferno-bootstrap`, visit the component docs and the excellent Bootstrap 4 website. When confused, check out the source code and tests.

## Installation
To use `infern-bootstrap` you need to include the Bootstrap CSS files, but not any of the Bootstrap JavaScript.

```
$ npm install --save-prod inferno-bootstrap bootstrap@4
```

## Usage 
```JavaScript
// Use ES6 style imports and optionally tree-shaking
import { Input } from 'inferno-bootstrap'

// ...or, cherry pick to reduce size if you don't have tree-shaking
import Input from 'inferno-bootstrap/lib/Form/Input'

// ...or, if you are cherry picking and using TypeScript
import * as Input from 'inferno-bootstrap/lib/Form/Input'
```

You can get a nicer debugging experience by importing your components from the original source code
in the `/src` directory. This requires that you transpile all imports from `node_module/inferno-bootstrap` and add the transpiling options found in the .babelrc config file at the root of this repos:

```JavaScript
// Cherry pick to reduce size
import Input from 'inferno-bootstrap/src/Form/Input'

// Or keep it simple and use tree shaking
import { Input } from 'inferno-bootstrap/src'
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
