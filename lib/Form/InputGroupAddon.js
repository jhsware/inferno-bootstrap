import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'div'
};

const InputGroupAddon = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'input-group-addon'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
