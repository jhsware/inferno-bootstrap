import { render } from "inferno"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardFooter from '../../lib/Card/CardFooter';

describe('CardFooter', () => {
  it('should render with "card-footer" class', () => {
    const tree = renderIntoDocument(<CardFooter>Yo!</CardFooter>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'card-footer')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardFooter className="other">Yo!</CardFooter>);

    expect(hasClass(tree.$V, 'other')).toBe(true);
    expect(hasClass(tree.$V, 'card-footer')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardFooter tag="main">Yo!</CardFooter>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'card-footer')).toBe(true);
    expect(getTagName(tree.$V)).toBe('main')
  });
});
