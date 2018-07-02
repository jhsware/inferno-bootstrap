import { render } from "inferno"
import { renderIntoDocument } from '../utils'
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
    const tree = renderIntoDocument(<CardImgOverlay>Yo!</CardImgOverlay>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'card-img-overlay')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardImgOverlay className="other">Yo!</CardImgOverlay>);

    expect(hasClass(tree.$V, 'other')).toBe(true);
    expect(hasClass(tree.$V, 'card-img-overlay')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardImgOverlay tag="main">Yo!</CardImgOverlay>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'card-img-overlay')).toBe(true);
    expect(getTagName(tree.$V)).toBe('main')
  });
});
