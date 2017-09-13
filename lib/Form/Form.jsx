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
    innerRef,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
  ), cssModule);

  return (
    <Tag {...attributes} ref={innerRef} className={classes} />
  );
};

Form.defaultProps = defaultProps;

export default Form;
