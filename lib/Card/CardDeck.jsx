import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'div',
};

const CardDeck = (props) => {
  const {
    className,
    cssModule,
    el: El,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-deck'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

CardDeck.defaultProps = defaultProps;

export default CardDeck;
