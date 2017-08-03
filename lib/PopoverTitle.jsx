import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'h3'
};

const PopoverTitle = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'popover-title'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

PopoverTitle.defaultProps = defaultProps;

export default PopoverTitle;
