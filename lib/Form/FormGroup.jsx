import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'div'
}

const FormGroup = (props) => {
  const {
    className,
    cssModule,
    row,
    disabled,
    color, // success | warning | danger
    check,
    el: El,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    color ? `has-${color}` : false,
    row ? 'row' : false,
    check ? 'form-check' : 'form-group',
    check && disabled ? 'disabled' : false
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

FormGroup.defaultProps = defaultProps;

export default FormGroup;
