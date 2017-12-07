import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'div'
}

const FormGroup = (props) => {
  const {
    className,
    cssModule,
    row,
    disabled,
    check,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    row ? 'row' : false,
    check ? 'form-check' : 'form-group',
    check && disabled ? 'disabled' : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

FormGroup.defaultProps = defaultProps;

export default FormGroup;
