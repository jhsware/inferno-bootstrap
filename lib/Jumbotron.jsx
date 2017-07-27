import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  el: 'div'
};

const Jumbotron = (props) => {
  const {
    className,
    cssModule,
    el: El,
    fluid,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'jumbotron',
    fluid ? 'jumbotron-fluid' : false
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

Jumbotron.defaultProps = defaultProps;

export default Jumbotron;
