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

  return (
    <Tag {...attributes} className={classes}>
      {children || <span className={mapToCssModules('navbar-toggler-icon', cssModule)} />}
    </Tag>
  );
};

NavbarToggler.defaultProps = defaultProps;

export default NavbarToggler;
