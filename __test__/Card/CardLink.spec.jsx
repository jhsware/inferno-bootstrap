import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardLink from '../../lib/Card/CardLink';

describe('CardLink', () => {
  it('should render with "card-link" class', () => {
    const DOM = renderIntoElement(<CardLink>Yo!</CardLink>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-link')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<CardLink className="other">Yo!</CardLink>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'card-link')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<CardLink tag="button">Yo!</CardLink>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-link')).toBe(true);
    expect(getTagName(DOM)).toBe('button');
  });
});
