import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'div'
};

const CardFooter = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-footer'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardFooter.defaultProps = defaultProps;

export default CardFooter;
