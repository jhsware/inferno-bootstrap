import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'button',
  type: 'button'
};

const navbarToggleIcon = <span className="navbar-toggler-icon" />;

const NavbarToggler = (props) => {
  const {
    className,
    cssModule,
    children,
    right,
    left,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'navbar-toggler',
    right && 'navbar-toggler-right',
    left && 'navbar-toggler-left'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
      {children || navbarToggleIcon}
    </Tag>
  );
};

NavbarToggler.defaultProps = defaultProps;

export default NavbarToggler;
