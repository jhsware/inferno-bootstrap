import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML, getOuterHTML } from "../utils"

import Card from '../../lib/Card/Card';

describe('Card', () => {
  it('should render with "card" class', () => {
    const tree = renderIntoDocument(<Card>Yo!</Card>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card')).toBe(true);
  });

  it('should render with "modal-header" class', () => {
    const tree = renderIntoDocument(<Card inverse block color="primary">Yo!</Card>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card')).toBe(true);
    expect(hasClass(tree._vNode, 'card-body')).toBe(true);
    expect(hasClass(tree._vNode, 'bg-primary')).toBe(true);
    expect(hasClass(tree._vNode, 'text-white')).toBe(true);
  });

  it('should render with "outline" class when a color is provided', () => {
    const tree = renderIntoDocument(<Card outline block color="primary">Yo!</Card>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card')).toBe(true);
    expect(hasClass(tree._vNode, 'card-body')).toBe(true);
    expect(hasClass(tree._vNode, 'border-primary')).toBe(true);
  });

  it('should not render with "outline" class when a color is not provided (no default)', () => {
    const tree = renderIntoDocument(<Card outline block>Yo!</Card>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card')).toBe(true);
    expect(hasClass(tree._vNode, 'card-body')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<Card className="other">Yo!</Card>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'card')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<Card tag="main">Yo!</Card>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('main');
  });
});
