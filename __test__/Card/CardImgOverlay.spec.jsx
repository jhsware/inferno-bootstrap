import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardImgOverlay from '../../lib/Card/CardImgOverlay';

describe('CardImgOverlay', () => {
  it('should render with "card-img-overlay" class', () => {
    const DOM = renderIntoElement(<CardImgOverlay>Yo!</CardImgOverlay>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-img-overlay')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<CardImgOverlay className="other">Yo!</CardImgOverlay>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'card-img-overlay')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<CardImgOverlay tag="main">Yo!</CardImgOverlay>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-img-overlay')).toBe(true);
    expect(getTagName(DOM)).toBe('main')
  });
});
