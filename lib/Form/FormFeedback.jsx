import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'div',
};

const FormFeedback = (props) => {
  const {
    className,
    cssModule,
    el: El,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'form-control-feedback'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

FormFeedback.defaultProps = defaultProps;

export default FormFeedback;
