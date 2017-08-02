import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'h4'
};

const CardTitle = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-title'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardTitle.defaultProps = defaultProps;

export default CardTitle;
