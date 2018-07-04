import { render } from "inferno"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardColumns from '../../lib/Card/CardColumns';

describe('CardColumns', () => {
  it('should render with "card-columns" class', () => {
    const tree = renderIntoDocument(<CardColumns>Yo!</CardColumns>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'card-columns')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardColumns className="other">Yo!</CardColumns>);

    expect(hasClass(tree.$LI, 'other')).toBe(true);
    expect(hasClass(tree.$LI, 'card-columns')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardColumns tag="main">Yo!</CardColumns>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'card-columns')).toBe(true);
    expect(getTagName(tree.$LI)).toBe('main')
  });
});
