import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'div'
};

const CardColumns = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-columns'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardColumns.defaultProps = defaultProps;

export default CardColumns;
