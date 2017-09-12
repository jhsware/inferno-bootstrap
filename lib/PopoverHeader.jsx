import inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'h3'
};

const PopoverHeader = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'popover-header'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

PopoverHeader.defaultProps = defaultProps;

export default PopoverHeader;
