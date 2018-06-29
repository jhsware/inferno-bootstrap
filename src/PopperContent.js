import { Component } from 'inferno';

import classNames from 'classnames';
import { Arrow, Manager, Popper } from 'inferno-popper';
import PopperTargetHelper from './PopperTargetHelper';
import { mapToCssModules } from './utils';

const defaultProps = {
  placement: 'auto',
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  wrapTag: 'span',
  flip: true,
};

class PopperContent extends Component {
  constructor(props) {
    super(props);

    this.handlePlacementChange = this.handlePlacementChange.bind(this);
    this.state = {};
  }

  handlePlacementChange(data) {
    if (this.state.placement !== data.placement) {
      this.setState({ placement: data.placement });
    }
    return data;
  }

  render() {
    const {
      cssModule,
      children,
      isOpen,
      flip,
      target,
      offset,
      fallbackPlacement,
      placementPrefix,
      className,
      wrapTag,
      wrapClassName,
      tag,
      ...attrs } = this.props;
    const arrowClassName = mapToCssModules('arrow', cssModule);
    const placement = (this.state.placement || attrs.placement).split('-')[0];
    const managerClass = mapToCssModules(wrapClassName, this.props.cssModule);
    const popperClassName = mapToCssModules(classNames(
      className,
      placementPrefix ? `${placementPrefix}-${placement}` : placement
    ), this.props.cssModule);

    const modifiers = {
      offset: { offset },
      flip: { enabled: flip, behavior: fallbackPlacement },
      update: {
        enabled: true,
        order: 950,
        fn: this.handlePlacementChange,
      },
    };

    return (
      <Manager tag={wrapTag} className={managerClass}>
        <PopperTargetHelper target={target} />
        {isOpen && <Popper modifiers={modifiers} {...attrs} component={tag} className={popperClassName}>
          {children}
          <Arrow className={arrowClassName} />
        </Popper>}
      </Manager>
    );
  }
}

PopperContent.defaultProps = defaultProps;

export default PopperContent;