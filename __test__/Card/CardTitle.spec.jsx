import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardTitle from '../../lib/Card/CardTitle.jsx';

describe('CardTitle', () => {
  it('should render with "card-title" class', () => {
    const tree = renderIntoDocument(<CardTitle>Yo!</CardTitle>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-title')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardTitle className="other">Yo!</CardTitle>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'card-title')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardTitle el="h1">Yo!</CardTitle>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-title')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('h1');
  });
});