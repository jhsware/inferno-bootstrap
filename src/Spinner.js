import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  type: 'border',
  children: 'Loading...'
};

const Spinner = props => {
  const {
    className,
    cssModule,
    type,
    size,
    color,
    children,
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(
      className,
      size ? `spinner-${type}-${size}` : false,
      `spinner-${type}`,
      color ? `text-${color}` : false
    ),
    cssModule
  );

  return (
    <div role="status" {...attributes} className={classes}>
      {children &&
        <span className={mapToCssModules('sr-only', cssModule)}>
          {children}
        </span>
      }
    </div>
  );
};

Spinner.defaultProps = defaultProps;

export default Spinner;