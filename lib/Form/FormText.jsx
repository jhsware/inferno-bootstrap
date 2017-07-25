import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'small',
};

const FormText = (props) => {
  const {
    className,
    cssModule,
    inline,
    color, // muted || success || warning || info || danger
    el: El,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    !inline ? 'form-text' : false,
    color ? `text-${color}` : false
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

FormText.defaultProps = defaultProps;

export default FormText;
