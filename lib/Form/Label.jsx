import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'label',
};

const Label = (props) => {
  const {
    className,
    cssModule,
    hidden,
    tag: Tag,
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
    <Tag htmlFor={htmlFor} {...attributes} className={classes} />
  );
};

Label.defaultProps = defaultProps;

export default Label;
