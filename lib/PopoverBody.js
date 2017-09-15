
import inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'div'
};

const PopoverBody = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'popover-body'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

PopoverBody.defaultProps = defaultProps;

export default PopoverBody;