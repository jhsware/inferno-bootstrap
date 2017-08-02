import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'nav',
  toggleable: false,
};

const getToggleableClass = (toggleable) => {
  if (toggleable === false) {
    return false;
  } else if (toggleable === true || toggleable === 'xs') {
    return 'navbar-toggleable';
  }

  return `navbar-toggleable-${toggleable}`;
};

const Navbar = (props) => {
  const {
    toggleable,
    className,
    cssModule,
    light,
    inverse,
    full,
    fixed,
    sticky,
    color,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'navbar',
    getToggleableClass(toggleable),
    {
      'navbar-light': light,
      'navbar-inverse': inverse,
      [`bg-${color}`]: color,
      'navbar-full': full,
      [`fixed-${fixed}`]: fixed,
      [`sticky-${sticky}`]: sticky,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Navbar.defaultProps = defaultProps;

export default Navbar;
