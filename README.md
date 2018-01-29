# inferno-bootstrap
Inferno components for Bootstrap 4. Ported from Reactstrap with some modifications.

View component docs at https://jhsware.github.io/inferno-bootstrap-docs/

## Installation ##
To use `infern-bootstrap` you need to include the Bootstrap CSS files, but not any of the Bootstrap JavaScript.

```
$ npm install -S inferno-bootstrap inferno inferno-component bootstrap@4.0.0-beta.2
```

To import transpiled code you import from the `/dist` directory:

```JavaScript
import Input from 'inferno-bootstrap/dist/Form/Input'
```
 
You can get a nicer debugging experience by importing your
components from the original source code in the `/lib` directory. However this requires that you transpile node_module imports and add the contents of the .babelrc config file from this repos to your project:

```JavaScript
import Input from 'inferno-bootstrap/lib/Form/Input'
```

You will find a working webpack.config file in the folder `test/browser`. Don't forget to add your .babelrc
file and babel package devDepencies.

## Animations ##
To simplify customising of animations `inferno-bootstrap` uses the [inferno-animation](https://github.com/jhsware/inferno-animation) library. To activate default animations, include the CSS from `node_modules/inferno-animation/css/defaultAnimations.css`. Check `inferno-animation` docs on how to customise your animations.

## Generate Off-line Docs ##
To generate off-line docs, clone the repos and run:

```
$ npm run build-test
$ ./scripts/generateDocs.sh
```

Your docs will be placed in `project/docs`.

TODO: Implement https://github.com/reactstrap/reactstrap/commit/5c5c2056b08b21502d8543e54cbc5341c966bf33
