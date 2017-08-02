import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'div',
};

const CardDeck = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-deck'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardDeck.defaultProps = defaultProps;

export default CardDeck;
