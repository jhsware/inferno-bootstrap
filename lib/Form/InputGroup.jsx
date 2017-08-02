import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'div'
};

const InputGroup = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    size,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'input-group',
    size ? `input-group-${size}` : null
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

InputGroup.defaultProps = defaultProps;

export default InputGroup;
