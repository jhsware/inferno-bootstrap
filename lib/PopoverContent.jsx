import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'div'
};

const PopoverContent = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'popover-content'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

PopoverContent.defaultProps = defaultProps;

export default PopoverContent;
