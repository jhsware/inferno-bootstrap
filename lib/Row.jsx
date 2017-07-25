import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  el: 'div'
};

const Row = (props) => {
  const {
    className,
    cssModule,
    noGutters,
    el: El,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    noGutters ? 'no-gutters' : null,
    'row'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

Row.defaultProps = defaultProps;

export default Row;
