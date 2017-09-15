import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'h6'
};

const CardSubtitle = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-subtitle'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardSubtitle.defaultProps = defaultProps;

export default CardSubtitle;
