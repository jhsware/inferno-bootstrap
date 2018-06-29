
import classNames from 'classnames';
import { mapToCssModules } from './utils';
import { Popper } from 'inferno-popper';

const defaultProps = {
  tag: 'div',
  flip: true,
};

const noFlipModifier = { flip: { enabled: false } };

const DropdownMenu = (props, context) => {
  const { className, cssModule, right, tag, flip, ...attrs } = props;
  const position1 = context.dropup ? 'top' : 'bottom';
  const position2 = right ? 'end' : 'start';
  const classes = mapToCssModules(classNames(
    className,
    'dropdown-menu',
    {
      'dropdown-menu-right': right,
      show: context.isOpen,
    }
  ), cssModule);

  attrs.placement = `${position1}-${position2}`;

  return (
    <Popper
      tabIndex="-1"
      role="menu"
      {...attrs}
      component={tag}
      aria-hidden={!context.isOpen}
      className={classes}
      modifiers={!flip ? noFlipModifier : undefined}
    />
  );
};

DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;