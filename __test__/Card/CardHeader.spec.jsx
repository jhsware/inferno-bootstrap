import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardHeader from '../../lib/Card/CardHeader';

describe('CardHeader', () => {
  it('should render with "card-header" class', () => {
    const DOM = renderIntoElement(<CardHeader>Yo!</CardHeader>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-header')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<CardHeader className="other">Yo!</CardHeader>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'card-header')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<CardHeader tag="main">Yo!</CardHeader>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-header')).toBe(true);
    expect(getTagName(DOM)).toBe('main')
  });
});
