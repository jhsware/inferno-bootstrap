import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardBlock from '../../lib/Card/CardBlock.jsx';

describe('CardBlock', () => {
  it('should render with "card-block" class', () => {
    const tree = renderIntoDocument(<CardBlock>Yo!</CardBlock>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-block')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardBlock className="other">Yo!</CardBlock>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'card-block')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardBlock el="main">Yo!</CardBlock>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-block')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('main')
  });
});
