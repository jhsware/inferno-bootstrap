import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardFooter from '../../lib/Card/CardFooter';

describe('CardFooter', () => {
  it('should render with "card-footer" class', () => {
    const DOM = renderIntoElement(<CardFooter>Yo!</CardFooter>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-footer')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<CardFooter className="other">Yo!</CardFooter>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'card-footer')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<CardFooter tag="main">Yo!</CardFooter>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-footer')).toBe(true);
    expect(getTagName(DOM)).toBe('main')
  });
});
