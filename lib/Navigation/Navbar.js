import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';


const defaultProps = {
  tag: 'nav',
  toggleable: false,
  expandable: false,
};

const getToggleableClass = (toggleable) => {
  if (toggleable === false) {
    return false;
  } else if (toggleable === true || toggleable === 'xs') {
    return 'navbar-expand';
  }

  return `navbar-expand-${toggleable}`;
};

const Navbar = (props) => {
  const {
    children,
    toggleable,
    expandable,
    className,
    cssModule,
    light,
    dark,
    inverse,
    fixed,
    sticky,
    color,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'navbar',
    getToggleableClass(toggleable || expandable),
    {
      'navbar-light': light,
      'navbar-dark': inverse || dark,
      [`bg-${color}`]: color,
      [`fixed-${fixed}`]: fixed,
      [`sticky-${sticky}`]: sticky,
    }
  ), cssModule);

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

Navbar.defaultProps = defaultProps;

export default Navbar;
