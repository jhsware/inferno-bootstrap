import { render } from "inferno"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardTitle from '../../lib/Card/CardTitle';

describe('CardTitle', () => {
  it('should render with "card-title" class', () => {
    const tree = renderIntoDocument(<CardTitle>Yo!</CardTitle>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'card-title')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardTitle className="other">Yo!</CardTitle>);

    expect(hasClass(tree.$LI, 'other')).toBe(true);
    expect(hasClass(tree.$LI, 'card-title')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardTitle tag="h1">Yo!</CardTitle>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'card-title')).toBe(true);
    expect(getTagName(tree.$LI)).toBe('h1');
  });
});
