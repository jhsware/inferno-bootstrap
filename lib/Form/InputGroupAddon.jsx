import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'div'
};

const InputGroupAddon = (props) => {
  const {
    className,
    cssModule,
    el: El,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'input-group-addon'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
