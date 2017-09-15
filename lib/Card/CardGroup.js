import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'div'
};

const CardGroup = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-group'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardGroup.defaultProps = defaultProps;

export default CardGroup;
