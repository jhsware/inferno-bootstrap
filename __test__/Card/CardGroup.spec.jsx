import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardGroup from '../../lib/Card/CardGroup';

describe('CardGroup', () => {
  it('should render with "card-group" class', () => {
    const DOM = renderIntoElement(<CardGroup>Yo!</CardGroup>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-group')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<CardGroup className="other">Yo!</CardGroup>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'card-group')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<CardGroup tag="main">Yo!</CardGroup>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-group')).toBe(true);
    expect(getTagName(DOM)).toBe('main')
  });
});
