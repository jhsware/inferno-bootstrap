import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardLink from '../../lib/Card/CardLink';

describe('CardLink', () => {
  it('should render with "card-link" class', () => {
    const tree = renderIntoDocument(<CardLink>Yo!</CardLink>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-link')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardLink className="other">Yo!</CardLink>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'card-link')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardLink tag="button">Yo!</CardLink>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-link')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('button');
  });
});
