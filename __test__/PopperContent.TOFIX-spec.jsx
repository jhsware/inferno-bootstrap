import { render } from "inferno"
import sinon from "sinon"
import { renderIntoElement } from './utils'
import { 
  scryRenderedDOMElementsWithClass,
  scryRenderedDOMElementsWithTag,
  findRenderedDOMElementWithTag,
  findVNodeWithType,
  renderIntoContainer,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode, getAnimationFramePolyfill } from "./utils"

getAnimationFramePolyfill()

import { Arrow, Manager, Popper } from 'inferno-popper';
import PopperContent from '../lib/PopperContent';
import PopperTargetHelper from '../lib/PopperTargetHelper';

describe('TetherContent', () => {
  let element;
  let container;

  beforeEach(() => {
    element = document.createElement('div');
    container = document.createElement('div');
    element.innerHTML = '<p id="outerTarget">This is the popover <span id="target">target</span>.</p>';
    container.setAttribute('id', 'container');
    element.appendChild(container);
    document.body.appendChild(element);

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    document.body.removeChild(element);
    element = null;
  });

  it('faking for now', () => {
  });

  it('should render a Manager by default', () => {
    const renderedTree = renderIntoContainer(<PopperContent target="target">Yo!</PopperContent>, container);

    const node = findVNodeWithType(renderedTree, Manager)
    expect(node).toBeDefined()
  });
  
  it('should render a Manager as a span by default', () => {
    const renderedTree = renderIntoContainer(<PopperContent target="target">Yo!</PopperContent>, container);

    const node = findVNodeWithType(renderedTree, Manager)
    expect(node).toBeDefined()
  });
  
  it('should render a PopperTargetHelper', () => {
    const renderedTree = renderIntoContainer(<PopperContent target="target">Yo!</PopperContent>, container);

    // expect(wrapper.containsMatchingElement(<PopperTargetHelper target="target" />)).toBe(true);
    expect(findVNodeWithType(renderedTree, PopperTargetHelper)).toBeDefined();
    
  });

  it('should NOT render children when isOpen is false', () => {
    const DOM = renderIntoElement(<PopperContent target="target">Yo!</PopperContent>);

    expect(DOM.innerHTML).toBe('');
  });

  it('should render children when isOpen is true', () => {
    const DOM = renderIntoElement(<PopperContent target="target" isOpen>Yo!</PopperContent>, container);

    expect(DOM.innerHTML).toBe('<div class=\"auto\" style=\"position: absolute; pointer-events: none; opacity: 0;\">Yo!<span class=\"arrow\"></span></div>');
  });
  
  
  it('should render an Arrow in the Popper when isOpen is true', () => {
    const renderedTree = renderIntoContainer(<PopperContent target="target" isOpen>Yo!</PopperContent>, container);

    expect(findVNodeWithType(renderedTree, Arrow)).toBeDefined();
  });

  it('should pass additional classNames to the wrap', () => {
    const DOM = renderIntoElement(<PopperContent wrapClassName="extra" target="target">Yo!</PopperContent>, container);

    expect(hasClass(DOM, 'extra')).toBe(true);
  });

  
  it('should pass additional classNames to the popper', () => {
    const DOM = renderIntoElement(<PopperContent className="extra" target="target" isOpen>Yo!</PopperContent>);

    expect(DOM.getElementsByClassName('extra').length).toBe(1);
  });

  it('should have placement class of top by default', () => {
    const DOM = renderIntoElement(<PopperContent target="target" isOpen>Yo!</PopperContent>);
    
    expect(DOM.getElementsByClassName('auto').length).toBe(1);
  });
  
  it('should override placement class', () => {
    const DOM = renderIntoElement(<PopperContent placement="top" target="target" isOpen>Yo!</PopperContent>, container);
    
    expect(DOM.getElementsByClassName('auto').length).toBe(0);
    expect(DOM.getElementsByClassName('top').length).toBe(1);
  });
  
  it('should allow for a placement prefix', () => {
    const DOM = renderIntoElement(<PopperContent placementPrefix="dropdown" target="target" isOpen>Yo!</PopperContent>, container);
    
    expect(DOM.getElementsByClassName('dropdown-auto').length).toBe(1);
  });
  
  it('should allow for a placement prefix with custom placement', () => {
    const DOM = renderIntoElement(<PopperContent placementPrefix="dropdown" placement="top" target="target" isOpen>Yo!</PopperContent>, container);
    
    expect(DOM.getElementsByClassName('dropdown-auto').length).toBe(0);
    expect(DOM.getElementsByClassName('dropdown-top').length).toBe(1);
  });
  
  /*
  it('should render custom wrap tag', () => {
    const wrapper = mount(<PopperContent wrapTag="main" target="target">Yo!</PopperContent>);

    expect(wrapper.getDOMNode().tagName.toLowerCase()).toBe('main');
  });

  it('should render custom tag for the popper', () => {
    const wrapper = mount(<PopperContent tag="main" target="target" isOpen>Yo!</PopperContent>);

    expect(wrapper.getDOMNode().tagName.toLowerCase()).toBe('span');
    expect(wrapper.find('main').getDOMNode().tagName.toLowerCase()).toBe('main');
  });

  it('should handle placement changes from popperjs', () => {
    jest.spyOn(PopperContent.prototype, 'setState');
    const wrapper = mount(<PopperContent tag="main" target="target" isOpen>Yo!</PopperContent>);

    const instance = wrapper.instance();
    const placement = 'top';
    expect(PopperContent.prototype.setState).not.toHaveBeenCalled();
    instance.handlePlacementChange({ placement });
    expect(PopperContent.prototype.setState).toHaveBeenCalled();
    expect(wrapper.state('placement')).toBe(placement);

    PopperContent.prototype.setState.mockRestore();
  });

  it('should not update when placement does not change', () => {
    jest.spyOn(PopperContent.prototype, 'setState');
    const wrapper = mount(<PopperContent tag="main" target="target" isOpen>Yo!</PopperContent>);

    const instance = wrapper.instance();
    const placement = 'top';
    expect(PopperContent.prototype.setState).not.toHaveBeenCalled();
    instance.handlePlacementChange({ placement });
    expect(PopperContent.prototype.setState).toHaveBeenCalled();
    PopperContent.prototype.setState.mockClear();
    instance.handlePlacementChange({ placement });
    expect(PopperContent.prototype.setState).not.toHaveBeenCalled();
    expect(wrapper.state('placement')).toBe(placement);

    PopperContent.prototype.setState.mockRestore();
  });

  it('should return data from handle placement changes', () => {
    const wrapper = mount(<PopperContent tag="main" target="target" isOpen>Yo!</PopperContent>);

    const instance = wrapper.instance();
    const data = { placement: 'top' };
    const result = instance.handlePlacementChange(data);
    expect(result).toEqual(data);
  });
  */
});
