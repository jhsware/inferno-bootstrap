import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import InputGroupText from './InputGroupText';

const defaultProps = {
  tag: 'div'
};

const InputGroupAddon = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    addonType,
    children,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'input-group-' + addonType
  ), cssModule);

  // Convenience to assist with transition
  if (typeof children === 'string') {
    return (
      <Tag {...attributes} className={classes}>
        <InputGroupText children={children} />
      </Tag>
    );
  }

  return (
    <Tag {...attributes} className={classes} children={children} />
  );
};

InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
