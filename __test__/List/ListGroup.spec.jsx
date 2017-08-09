import { render } from "inferno"
import sinon from "sinon"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode } from "../utils"

import ListGroup from "../../lib/List/ListGroup.jsx"

describe('ListGroup', () => {
  it('should render with "list-group" class', () => {
    const tree = renderIntoDocument(<ListGroup>Yo!</ListGroup>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'list-group')).toBe(true);
  });

  it('should render with "flush"', () => {
    const tree = renderIntoDocument(<ListGroup flush>Yo!</ListGroup>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'list-group')).toBe(true);
    expect(hasClass(tree._vNode, 'list-group-flush')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<ListGroup className="other">Yo!</ListGroup>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'list-group')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<ListGroup tag="main">Yo!</ListGroup>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'list-group')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('main');
  });
});
