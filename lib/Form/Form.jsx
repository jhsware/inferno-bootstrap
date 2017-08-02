import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'form',
};

const Form = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    getRef,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
  ), cssModule);

  return (
    <Tag {...attributes} ref={getRef} className={classes} />
  );
};

Form.defaultProps = defaultProps;

export default Form;
