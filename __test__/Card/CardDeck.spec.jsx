import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardDeck from '../../dist/Card/CardDeck';

describe('CardDeck', () => {
  it('should render with "card-deck" class', () => {
    const tree = renderIntoDocument(<CardDeck>Yo!</CardDeck>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'card-deck')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardDeck className="other">Yo!</CardDeck>);

    expect(hasClass(tree.$V, 'other')).toBe(true);
    expect(hasClass(tree.$V, 'card-deck')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardDeck tag="main">Yo!</CardDeck>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'card-deck')).toBe(true);
    expect(getTagName(tree.$V)).toBe('main')
  });
});
