import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'div'
};

const CardBlock = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-block'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardBlock.defaultProps = defaultProps;

export default CardBlock;
