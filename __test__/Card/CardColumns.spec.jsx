import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardColumns from '../../lib/Card/CardColumns.jsx';

describe('CardColumns', () => {
  it('should render with "card-columns" class', () => {
    const tree = renderIntoDocument(<CardColumns>Yo!</CardColumns>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-columns')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardColumns className="other">Yo!</CardColumns>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'card-columns')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardColumns el="main">Yo!</CardColumns>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-columns')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('main')
  });
});
