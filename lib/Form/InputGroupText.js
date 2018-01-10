import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'span'
};

const InputGroupText = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'input-group-text'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

InputGroupText.defaultProps = defaultProps;

export default InputGroupText;