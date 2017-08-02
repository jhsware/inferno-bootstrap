import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'p'
};

const CardText = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-text'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardText.defaultProps = defaultProps;

export default CardText;
