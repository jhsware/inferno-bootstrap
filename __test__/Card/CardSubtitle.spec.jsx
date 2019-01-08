import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardSubtitle from '../../lib/Card/CardSubtitle';

describe('CardSubtitle', () => {
  it('should render with "card-subtitle" class', () => {
    const DOM = renderIntoElement(<CardSubtitle>Yo!</CardSubtitle>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-subtitle')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<CardSubtitle className="other">Yo!</CardSubtitle>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'card-subtitle')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<CardSubtitle tag="h3">Yo!</CardSubtitle>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-subtitle')).toBe(true);
    expect(getTagName(DOM)).toBe('h3');
  });
});
