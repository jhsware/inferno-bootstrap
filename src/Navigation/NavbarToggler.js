import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'button',
  type: 'button'
};

const NavbarToggler = (props) => {
  const {
    className,
    cssModule,
    children,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'navbar-toggler'
  ), cssModule);

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children || <span className={mapToCssModules('navbar-toggler-icon', cssModule)} />
  )
};

NavbarToggler.defaultProps = defaultProps;

export default NavbarToggler;
