import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardDeck from '../../lib/Card/CardDeck';

describe('CardDeck', () => {
  it('should render with "card-deck" class', () => {
    const DOM = renderIntoElement(<CardDeck>Yo!</CardDeck>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-deck')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<CardDeck className="other">Yo!</CardDeck>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'card-deck')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<CardDeck tag="main">Yo!</CardDeck>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-deck')).toBe(true);
    expect(getTagName(DOM)).toBe('main')
  });
});
