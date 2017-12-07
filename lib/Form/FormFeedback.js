import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'div',
};

const FormFeedback = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'invalid-feedback'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

FormFeedback.defaultProps = defaultProps;

export default FormFeedback;
