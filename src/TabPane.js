import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'div',
};

export default function TabPane(props, context) {
  const {
    children,
    className,
    cssModule,
    tabId,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames('tab-pane', className, { active: tabId === context.activeTabId.activeTab }), cssModule);

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
}
TabPane.defaultProps = defaultProps;
