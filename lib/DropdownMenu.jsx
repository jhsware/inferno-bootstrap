import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  el: 'div',
};

const DropdownMenu = (props, context) => {
  const { className, cssModule, right, el: El, ...attributes } = props;
  const classes = mapToCssModules(classNames(
    className,
    'dropdown-menu',
    { 'dropdown-menu-right': right }
  ), cssModule);

  return (
    <El {...attributes} tabIndex="-1" aria-hidden={!context.isOpen} role="menu" className={classes} />
  );
};

DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;
