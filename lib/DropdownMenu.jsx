import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'div',
};

const DropdownMenu = (props, context) => {
  const { className, cssModule, right, tag: Tag, ...attributes } = props;
  const classes = mapToCssModules(classNames(
    className,
    'dropdown-menu',
    { 
      'dropdown-menu-right': right,
      'show': context.isOpen
    }
  ), cssModule);

  return (
    <Tag {...attributes} tabIndex="-1" aria-hidden={!context.isOpen} role="menu" className={classes} />
  );
};

DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;