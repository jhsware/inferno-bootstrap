import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardFooter from '../../lib/Card/CardFooter.jsx';

describe('CardFooter', () => {
  it('should render with "card-footer" class', () => {
    const tree = renderIntoDocument(<CardFooter>Yo!</CardFooter>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-footer')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardFooter className="other">Yo!</CardFooter>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'card-footer')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardFooter el="main">Yo!</CardFooter>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-footer')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('main')
  });
});
