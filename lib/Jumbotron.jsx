import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'div'
};

const Jumbotron = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    fluid,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'jumbotron',
    fluid ? 'jumbotron-fluid' : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Jumbotron.defaultProps = defaultProps;

export default Jumbotron;
