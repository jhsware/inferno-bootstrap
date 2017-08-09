import { render } from "inferno"
import sinon from "sinon"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode } from "../utils"

import ListGroupItem from "../../lib/List/ListGroupItem.jsx"

describe('ListGroupItem', () => {
  it('should render children', () => {
    const tree = renderIntoDocument(<ListGroupItem>Yo!</ListGroupItem>);
    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
  });

  it('should render with "list-group-item" class', () => {
    const tree = renderIntoDocument(<ListGroupItem>Yo!</ListGroupItem>);
    expect(hasClass(tree._vNode, 'list-group-item')).toBe(true);
  });

  it('should render with "active" class when active is passed', () => {
    const tree = renderIntoDocument(<ListGroupItem active>Yo!</ListGroupItem>);
    expect(hasClass(tree._vNode, 'active')).toBe(true);
  });

  it('should render with "disabled" class when disabled is passed', () => {
    const tree = renderIntoDocument(<ListGroupItem disabled>Yo!</ListGroupItem>);
    expect(hasClass(tree._vNode, 'disabled')).toBe(true);
  });

  it('should render with "list-group-item-action" class when action is passed', () => {
    const tree = renderIntoDocument(<ListGroupItem action>Yo!</ListGroupItem>);
    expect(hasClass(tree._vNode, 'list-group-item-action')).toBe(true);
  });

  it('should render with "list-group-item-${color}" class when color is passed', () => {
    const tree = renderIntoDocument(<ListGroupItem color="success">Yo!</ListGroupItem>);
    expect(hasClass(tree._vNode, 'list-group-item-success')).toBe(true);
  });

  it('should prevent click event when disabled is passed', () => {
    const testClick = {
      didClick: () => {}
    }
    const clickSpy = sinon.spy(testClick, 'didClick')
    
    const tree = renderIntoDocument(<ListGroupItem disabled onClick={testClick.didClick}>Yo!</ListGroupItem>);

    const vnode = findRenderedVNodeWithType(tree, "li")
    vnode.dom.click()
    
    expect(clickSpy.callCount).toBe(0)
  });
});
