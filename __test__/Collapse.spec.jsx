import { render } from "inferno"
import sinon from "sinon"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getOuterHTML, getInnerHTML, getInstance } from "./utils"

import Collapse from "../lib/Collapse"

jest.useFakeTimers();

describe('Collapse', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
  });

  afterEach(() => {
    // fast forward time for modal to fade out
    // jasmine.clock().tick(400);
    // jasmine.clock().uninstall();
    jest.runTimersToTime(400)
  });

  it('should render children', () => {
    const tree = renderIntoDocument(<Collapse isOpen><p>hello</p></Collapse>);
    expect(getInnerHTML(tree._vNode)).toBe('<p>hello</p>');
  });

  it('should have default isOpen value', () => {
    const tree = renderIntoDocument(<Collapse />);
    const instance = getInstance(tree)
    expect(instance.props.isOpen).toEqual(false);
  });

  /*
  // Have I removed this, do we want it? (it can be a simple className)
  it('should render with class "navbar"', () => {
    const tree = renderIntoDocument(<Collapse navbar isOpen />);
    console.log(getOuterHTML(tree._vNode))
    expect(hasClass(tree._vNode, 'navbar')).toEqual(true);
  });
  */

  /*
  it('should render with class "collapse" with default collapse state', () => {
    const tree = renderIntoDocument(<Collapse isOpen={isOpen} />);
    wrapper.setState({ collapse: null });
    jasmine.clock().tick(360);
    wrapper.update();
    expect(wrapper.find('.collapse').length).toBe(1);
    wrapper.unmount();
  });

  it('should change state with { collapse: ${State} } when isOpen change to true before transition', () => {
    const tree = renderIntoDocument(<Collapse isOpen={isOpen} />);
    toggle();
    wrapper.setProps({ isOpen: isOpen });
    expect(wrapper.state('collapse')).toEqual('SHOW');
    wrapper.unmount();
  });

  it('should change state with { collapse: ${State} } when isOpen change to true after transition', () => {
    const tree = renderIntoDocument(<Collapse isOpen={isOpen} />);
    toggle();
    wrapper.setProps({ isOpen: isOpen });
    jasmine.clock().tick(350);
    expect(wrapper.state('collapse')).toEqual('SHOWN');
    wrapper.unmount();
  });

  it('should change state with { collapse: ${State} } when isOpen change to false before transition', () => {
    isOpen = true;
    const tree = renderIntoDocument(<Collapse isOpen={isOpen} />);
    toggle();
    wrapper.setProps({ isOpen: isOpen });
    expect(wrapper.state('collapse')).toEqual('HIDE');
    wrapper.unmount();
  });

  it('should change state with { collapse: ${State} } when isOpen change to false after transition', () => {
    isOpen = true;
    const tree = renderIntoDocument(<Collapse isOpen={isOpen} />);
    toggle();
    wrapper.setProps({ isOpen: isOpen });
    jasmine.clock().tick(360);
    expect(wrapper.state('collapse')).toEqual('HIDDEN');
    wrapper.unmount();
  });

  it('should set inline style to 0 when isOpen change to false', () => {
    isOpen = true;
    const tree = renderIntoDocument(<Collapse isOpen={isOpen} />);
    toggle();
    wrapper.setProps({ isOpen: isOpen });
    expect(wrapper.state('height')).toBe(0);
    wrapper.unmount();
  });

  it('should remove inline style when isOpen change to true after transition', () => {
    const tree = renderIntoDocument(<Collapse isOpen={isOpen} />);
    toggle();
    wrapper.setProps({ isOpen: isOpen });
    jasmine.clock().tick(380);
    expect(wrapper.state('height')).toBe(null);
    wrapper.unmount();
  });

  it('should remove timeout tag after unmount', () => {
    spyOn(Collapse.prototype, 'componentWillUnmount').and.callThrough();
    const tree = renderIntoDocument(<Collapse isOpen={isOpen} />);
    wrapper.unmount();
    expect(Collapse.prototype.componentWillUnmount).toHaveBeenCalled();
  });

  it('should call onOpened after opening', () => {
    const onOpened = jasmine.createSpy('onOpenedSpy');
    const onClosed = jasmine.createSpy('onClosedSpy');
    const tree = renderIntoDocument(<Collapse isOpen={isOpen} onOpened={onOpened} onClosed={onClosed} />);

    jasmine.clock().tick(300);
    expect(isOpen).toBe(false);
    expect(onOpened).not.toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({ isOpen });
    jasmine.clock().tick(380);
    expect(isOpen).toBe(true);
    expect(onOpened).toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should call onClosed after closing', () => {
    const onOpened = jasmine.createSpy('onOpenedSpy');
    const onClosed = jasmine.createSpy('onClosedSpy');
    toggle();
    const tree = renderIntoDocument(<Collapse isOpen={isOpen} onOpened={onOpened} onClosed={onClosed} />);

    jasmine.clock().tick(380);
    expect(isOpen).toBe(true);
    expect(onOpened).not.toHaveBeenCalled();
    expect(onClosed).not.toHaveBeenCalled();

    toggle();
    wrapper.setProps({ isOpen });
    jasmine.clock().tick(380);
    expect(isOpen).toBe(false);
    expect(onOpened).not.toHaveBeenCalled();
    expect(onClosed).toHaveBeenCalled();

    wrapper.unmount();
  });
  */
});
