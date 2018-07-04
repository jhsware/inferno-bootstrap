import { render } from "inferno"
import sinon from "sinon"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode } from "../utils"

import ListGroup from "../../lib/List/ListGroup"

describe('ListGroup', () => {
  it('should render with "list-group" class', () => {
    const tree = renderIntoDocument(<ListGroup>Yo!</ListGroup>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'list-group')).toBe(true);
  });

  it('should render with "flush"', () => {
    const tree = renderIntoDocument(<ListGroup flush>Yo!</ListGroup>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'list-group')).toBe(true);
    expect(hasClass(tree.$LI, 'list-group-flush')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<ListGroup className="other">Yo!</ListGroup>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'other')).toBe(true);
    expect(hasClass(tree.$LI, 'list-group')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<ListGroup tag="main">Yo!</ListGroup>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'list-group')).toBe(true);
    expect(getTagName(tree.$LI)).toBe('main');
  });
});
