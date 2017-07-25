import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'label',
};

const Label = (props) => {
  const {
    className,
    cssModule,
    hidden,
    el: El,
    check,
    disabled,
    htmlFor,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    hidden ? 'sr-only' : false,
    check ? 'form-check-label' : 'form-control-label',
    check && disabled ? 'disabled' : false
  ), cssModule);

  return (
    <El htmlFor={htmlFor} {...attributes} className={classes} />
  );
};

Label.defaultProps = defaultProps;

export default Label;
