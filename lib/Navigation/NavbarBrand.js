import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'a'
};

const NavbarBrand = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'navbar-brand'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;
