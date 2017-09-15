import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'li'
};

const NavItem = (props) => {
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
    <Tag {...attributes} className={classes} />
  );
};

NavItem.defaultProps = defaultProps;

export default NavItem;
