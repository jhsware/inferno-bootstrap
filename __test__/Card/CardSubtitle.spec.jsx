import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardSubtitle from '../../dist/Card/CardSubtitle';

describe('CardSubtitle', () => {
  it('should render with "card-subtitle" class', () => {
    const tree = renderIntoDocument(<CardSubtitle>Yo!</CardSubtitle>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-subtitle')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardSubtitle className="other">Yo!</CardSubtitle>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'card-subtitle')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardSubtitle tag="h3">Yo!</CardSubtitle>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-subtitle')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('h3');
  });
});
