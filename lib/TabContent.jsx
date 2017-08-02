import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';
import { mapToCssModules, omit } from './utils';

const defaultProps = {
  tag: 'div',
};

const omitProps = ['tag', 'activeTab', 'className', 'cssModule'];

export default class TabContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab
    };
  }
  getChildContext() {
    return {
      activeTabId: this.state
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.activeTab !== nextProps.activeTab) {
      this.setState({
        activeTab: nextProps.activeTab
      });
    }
  }
  render() {
    const {
      className,
      cssModule,
      tag: Tag,
    } = this.props;

    const attributes = omit(this.props, omitProps);

    const classes = mapToCssModules(classNames('tab-content', className), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}
TabContent.defaultProps = defaultProps;
