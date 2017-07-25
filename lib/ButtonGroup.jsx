import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  el: 'div',
  role: 'group',
};

const ButtonGroup = (props) => {
  const {
    className,
    cssModule,
    size,
    vertical,
    el: El,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    size ? 'btn-group-' + size : false,
    vertical ? 'btn-group-vertical' : 'btn-group'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
