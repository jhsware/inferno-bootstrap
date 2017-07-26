import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardGroup from '../../lib/Card/CardGroup.jsx';

describe('CardGroup', () => {
  it('should render with "card-group" class', () => {
    const tree = renderIntoDocument(<CardGroup>Yo!</CardGroup>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-group')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardGroup className="other">Yo!</CardGroup>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'card-group')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardGroup el="main">Yo!</CardGroup>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-group')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('main')
  });
});