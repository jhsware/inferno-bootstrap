import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import toNumber from 'lodash.tonumber';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'div',
  value: 0,
  max: 100,
};

const Progress = (props) => {
  const {
    children,
    className,
    barClassName,
    cssModule,
    value,
    max,
    animated,
    striped,
    color, // success | info | warning | danger
    bar,
    multi,
    tag: Tag,
    ...attributes
  } = props;

  const percent = ((toNumber(value) / toNumber(max)) * 100);

  const progressClasses = mapToCssModules(classNames(
    className,
    'progress'
  ), cssModule);

  const progressBarClasses = mapToCssModules(classNames(
    'progress-bar',
    bar ? className || barClassName : barClassName,
    animated ? 'progress-bar-animated' : null,
    color ? `bg-${color}` : null,
    striped || animated ? 'progress-bar-striped' : null
  ), cssModule);

  const ProgressBar = multi ? children : (
    <div
      className={progressBarClasses}
      style={{ width: `${percent}%` }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={max}>{children}</div>
  );

  if (bar) {
    return ProgressBar;
  }

  Object.assign(attributes, { className: progressClasses })

  return createElement(
    Tag,
    attributes, 
    ProgressBar
  )
};

Progress.defaultProps = defaultProps;

export default Progress;
