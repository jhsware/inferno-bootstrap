import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardHeader from '../../lib/Card/CardHeader';

describe('CardHeader', () => {
  it('should render with "card-header" class', () => {
    const tree = renderIntoDocument(<CardHeader>Yo!</CardHeader>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-header')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardHeader className="other">Yo!</CardHeader>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'card-header')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardHeader tag="main">Yo!</CardHeader>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-header')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('main')
  });
});
