import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'table',
  responsiveTag: 'div',
};

const Table = (props) => {
  const {
    className,
    cssModule,
    size,
    bordered,
    striped,
    inverse,
    dark,
    hover,
    responsive,
    tag: Tag,
    responsiveTag: ResponsiveTag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'table',
    size ? 'table-' + size : false,
    bordered ? 'table-bordered' : false,
    striped ? 'table-striped' : false,
    (dark || inverse) ? 'table-dark' : false,
    hover ? 'table-hover' : false,
  ), cssModule);

  const table = <Tag {...attributes} className={classes} />;

  if (responsive) {
    const responsiveClassName = responsive === true ? 'table-responsive' : `table-responsive-${responsive}`;

    return (
      <ResponsiveTag className={responsiveClassName}>{table}</ResponsiveTag>
    );
  }

  return table;
};

Table.defaultProps = defaultProps;

export default Table;