import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'div'
};

const Row = (props) => {
  const {
    className,
    cssModule,
    noGutters,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    noGutters ? 'no-gutters' : null,
    'row'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Row.defaultProps = defaultProps;

export default Row;
