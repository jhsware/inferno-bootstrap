import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'a'
};

const CardLink = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    getRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-link'
  ), cssModule);

  return (
    <Tag {...attributes} ref={getRef} className={classes} />
  );
};

CardLink.defaultProps = defaultProps;

export default CardLink;
