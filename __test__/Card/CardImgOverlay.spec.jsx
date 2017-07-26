import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardImgOverlay from '../../lib/Card/CardImgOverlay.jsx';

describe('CardImgOverlay', () => {
  it('should render with "card-img-overlay" class', () => {
    const tree = renderIntoDocument(<CardImgOverlay>Yo!</CardImgOverlay>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-img-overlay')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardImgOverlay className="other">Yo!</CardImgOverlay>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'card-img-overlay')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardImgOverlay el="main">Yo!</CardImgOverlay>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-img-overlay')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('main')
  });
});
