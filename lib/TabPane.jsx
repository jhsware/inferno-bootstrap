import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'div',
};

export default function TabPane(props, context) {
  const {
    className,
    cssModule,
    tabId,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames('tab-pane', className, { active: tabId === context.activeTabId.activeTab }), cssModule);
  return (
    <Tag {...attributes} className={classes} />
  );
}
TabPane.defaultProps = defaultProps;
