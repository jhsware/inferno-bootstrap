import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'form',
};

const Form = (props) => {
  const {
    className,
    cssModule,
    el: El,
    getRef,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
  ), cssModule);

  return (
    <El {...attributes} ref={getRef} className={classes} />
  );
};

Form.defaultProps = defaultProps;

export default Form;
