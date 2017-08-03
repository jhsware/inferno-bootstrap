import Component from 'inferno-component';
import classNames from 'classnames';
import TetherContent from './TetherContent.jsx';
import { getTetherAttachments, mapToCssModules, omit, tetherAttachements } from './utils';

const omitProps = ['placement', 'target', 'isOpen', 'tether', 'tetherRef', 'className', 'cssModule', 'toggle'];

const defaultProps = {
  isOpen: false,
  placement: 'bottom',
  toggle: () => {}
};

const defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: {
    element: false,
    enabled: 'show',
  },
  constraints: [
    { to: 'scrollParent', attachment: 'together none' },
    { to: 'window', attachment: 'together none' }
  ]
};

class Popover extends Component {
  constructor(props) {
    super(props);

    this.getTetherConfig = this.getTetherConfig.bind(this);
  }

  getTetherConfig() {
    const attachments = getTetherAttachments(this.props.placement);
    return {
      ...defaultTetherConfig,
      ...attachments,
      target: '#' + this.props.target,
      ...this.props.tether
    };
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    let tetherConfig = this.getTetherConfig();

    const classes = mapToCssModules(classNames(
      'popover-inner',
      this.props.className
    ), this.props.cssModule);

    const attributes = omit(this.props, omitProps);

    return (
      <TetherContent
        className={mapToCssModules('popover', this.props.cssModule)}
        tether={tetherConfig}
        tetherRef={this.props.tetherRef}
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
      >
        <div {...attributes} className={classes} />
      </TetherContent>
    );
  }
}

Popover.defaultProps = defaultProps;

export default Popover;
