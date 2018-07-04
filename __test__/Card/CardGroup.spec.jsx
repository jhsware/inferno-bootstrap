import { render } from "inferno"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardGroup from '../../lib/Card/CardGroup';

describe('CardGroup', () => {
  it('should render with "card-group" class', () => {
    const tree = renderIntoDocument(<CardGroup>Yo!</CardGroup>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'card-group')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardGroup className="other">Yo!</CardGroup>);

    expect(hasClass(tree.$LI, 'other')).toBe(true);
    expect(hasClass(tree.$LI, 'card-group')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardGroup tag="main">Yo!</CardGroup>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'card-group')).toBe(true);
    expect(getTagName(tree.$LI)).toBe('main')
  });
});
