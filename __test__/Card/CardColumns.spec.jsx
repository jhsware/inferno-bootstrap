import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardColumns from '../../lib/Card/CardColumns';

describe('CardColumns', () => {
  it('should render with "card-columns" class', () => {
    const DOM = renderIntoElement(<CardColumns>Yo!</CardColumns>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-columns')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<CardColumns className="other">Yo!</CardColumns>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'card-columns')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<CardColumns tag="main">Yo!</CardColumns>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-columns')).toBe(true);
    expect(getTagName(DOM)).toBe('main')
  });
});
