import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'div'
};

const InputGroup = (props) => {
  const {
    className,
    cssModule,
    el: El,
    size,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'input-group',
    size ? `input-group-${size}` : null
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

InputGroup.defaultProps = defaultProps;

export default InputGroup;
