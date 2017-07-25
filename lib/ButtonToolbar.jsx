import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  el: 'div',
  role: 'toolbar',
};

const ButtonToolbar = (props) => {
  const {
    className,
    cssModule,
    el: El,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'btn-toolbar'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

ButtonToolbar.defaultProps = defaultProps;

export default ButtonToolbar;
