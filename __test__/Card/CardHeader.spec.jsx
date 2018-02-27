import { render } from "inferno"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardHeader from '../../dist/Card/CardHeader';

describe('CardHeader', () => {
  it('should render with "card-header" class', () => {
    const tree = renderIntoDocument(<CardHeader>Yo!</CardHeader>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'card-header')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardHeader className="other">Yo!</CardHeader>);

    expect(hasClass(tree.$V, 'other')).toBe(true);
    expect(hasClass(tree.$V, 'card-header')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardHeader tag="main">Yo!</CardHeader>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'card-header')).toBe(true);
    expect(getTagName(tree.$V)).toBe('main')
  });
});
