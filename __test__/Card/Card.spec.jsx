import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML, getOuterHTML } from "../utils"

import Card from '../../lib/Card/Card';

describe('Card', () => {
  it('should render with "card" class', () => {
    const DOM = renderIntoElement(<Card>Yo!</Card>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card')).toBe(true);
  });

  it('should render with "modal-header" class', () => {
    const DOM = renderIntoElement(<Card inverse block color="primary">Yo!</Card>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card')).toBe(true);
    expect(hasClass(DOM, 'card-body')).toBe(true);
    expect(hasClass(DOM, 'bg-primary')).toBe(true);
    expect(hasClass(DOM, 'text-white')).toBe(true);
  });

  it('should render with "outline" class when a color is provided', () => {
    const DOM = renderIntoElement(<Card outline block color="primary">Yo!</Card>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card')).toBe(true);
    expect(hasClass(DOM, 'card-body')).toBe(true);
    expect(hasClass(DOM, 'border-primary')).toBe(true);
  });

  it('should not render with "outline" class when a color is not provided (no default)', () => {
    const DOM = renderIntoElement(<Card outline block>Yo!</Card>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card')).toBe(true);
    expect(hasClass(DOM, 'card-body')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<Card className="other">Yo!</Card>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'card')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<Card tag="main">Yo!</Card>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card')).toBe(true);
    expect(getTagName(DOM)).toBe('main');
  });
});
