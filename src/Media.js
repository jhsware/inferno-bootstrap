import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const Media = (props) => {
  const {
    vertical,
    children,
    className,
    cssModule,
    href,
    tag,
    ...attributes
  } = props;

  const Tag = (href !== undefined ? tag || 'a' : tag || 'div');

  const classes = mapToCssModules(classNames(
    className, {
      'media': true,
      'flex-column': vertical
    }
  ), cssModule);

  Object.assign(attributes, {
    className: classes,
    href
  })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

const MediaBody = (props) => {
  const {
    children,
    className,
    cssModule,
    tag,
    ...attributes
  } = props;

  const Tag = tag || 'div';

  const classes = mapToCssModules(classNames(
    className,
    'media-body'
  ), cssModule);

  Object.assign(attributes, {
    className: classes,
  })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

const Image = (props) => {
  const {
    baseline,
    top,
    middle,
    bottom,
    textTop,
    textBottom,
    href,
    target,
    responsive,
    spacing,
    className,
    cssModule,
    ...attributes
  } = props;

  const alignment = {
    'align-baseline': baseline,
    'align-self-start': top,
    'align-self-end': bottom,
    'align-self-center': middle,
    'align-text-top': textTop,
    'align-text-bottom': textBottom
  }

  const responsiveWrapperClasses = responsive && ('embed-responsive embed-responsive-' + responsive)
  const responsiveItemClasses = responsive && 'embed-responsive-item'
  
  if (href) {
    const classes = mapToCssModules(classNames(className, responsiveItemClasses), cssModule);
    const anchorClasses = mapToCssModules(classNames(alignment, responsiveWrapperClasses, spacing), cssModule);
    const anchorAttributes = {
      href,
      target
    }
    return <a className={anchorClasses} {...anchorAttributes}><img className={classes} {...attributes} /></a>
  } else if (responsive) {
    const classes = mapToCssModules(classNames(className, responsiveItemClasses), cssModule);
    const wrapperClasses = mapToCssModules(classNames(alignment, responsiveWrapperClasses, spacing), cssModule);
    return <div className={wrapperClasses}><img className={classes} {...attributes} /></div>
  } else {
    const classes = mapToCssModules(classNames(className, alignment, spacing), cssModule);
    return <img className={classes} {...attributes} />
  }
};

export {
  Media,
  MediaBody,
  Image
}
