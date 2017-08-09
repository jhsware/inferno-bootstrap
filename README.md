# inferno-bootstrap
Inferno components for Bootstrap 4. Ported from Reactstrap with some modifications.

View component docs at https://jhsware.github.io/inferno-bootstrap-docs/

## Installation ##
To use `infern-bootstrap` you need to include the Bootstrap CSS files, but not any of the Bootstrap JavaScript.

```
$ npm install -S inferno-bootstrap inferno inferno-component bootstrap@4.0.0-alpha.6
```

## Animations ##
To simplify customising of animations `inferno-bootstrap` uses the [inferno-animation](https://github.com/jhsware/inferno-animation) library.
All animations are CSS-animations and you can also animate width and height.

To activate default animations, include the CSS from `css/defaultAnimations.css`. Check `inferno-animation` docs on how to customise the
animations.

## Generate Off-line Docs ##
To generate off-line docs, clone the repos and run:

```
$ npm run build-test
$ ./scripts/generateDocs.sh
```

Your docs will be placed in `project/docs`.