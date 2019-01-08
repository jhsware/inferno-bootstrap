import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardTitle from '../../lib/Card/CardTitle';

describe('CardTitle', () => {
  it('should render with "card-title" class', () => {
    const DOM = renderIntoElement(<CardTitle>Yo!</CardTitle>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-title')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<CardTitle className="other">Yo!</CardTitle>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'card-title')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<CardTitle tag="h1">Yo!</CardTitle>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-title')).toBe(true);
    expect(getTagName(DOM)).toBe('h1');
  });
});
