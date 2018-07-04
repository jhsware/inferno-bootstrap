import { render } from "inferno"
import { renderIntoDocument } from '../utils'
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
    const tree = renderIntoDocument(<CardDeck>Yo!</CardDeck>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'card-deck')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardDeck className="other">Yo!</CardDeck>);

    expect(hasClass(tree.$LI, 'other')).toBe(true);
    expect(hasClass(tree.$LI, 'card-deck')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardDeck tag="main">Yo!</CardDeck>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'card-deck')).toBe(true);
    expect(getTagName(tree.$LI)).toBe('main')
  });
});
