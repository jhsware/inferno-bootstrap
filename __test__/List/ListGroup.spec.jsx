import { render } from "inferno"
import sinon from "sinon"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode } from "../utils"

import ListGroup from "../../lib/List/ListGroup"

describe('ListGroup', () => {
  it('should render with "list-group" class', () => {
    const DOM = renderIntoElement(<ListGroup>Yo!</ListGroup>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'list-group')).toBe(true);
  });

  it('should render with "flush"', () => {
    const DOM = renderIntoElement(<ListGroup flush>Yo!</ListGroup>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'list-group')).toBe(true);
    expect(hasClass(DOM, 'list-group-flush')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<ListGroup className="other">Yo!</ListGroup>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'list-group')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<ListGroup tag="main">Yo!</ListGroup>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'list-group')).toBe(true);
    expect(getTagName(DOM)).toBe('main');
  });
});
