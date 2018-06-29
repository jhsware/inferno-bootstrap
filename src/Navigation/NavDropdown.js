import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import Dropdown from '../Dropdown';

const defaultProps = {
  tag: 'li'
};

const NavDropdown = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'nav-item'
  ), cssModule);

  return (
    <Dropdown {...attributes} tag={Tag} className={classes} />
  );
};

NavDropdown.defaultProps = defaultProps;

export default NavDropdown;
