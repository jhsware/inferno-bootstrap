import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardLink from '../../dist/Card/CardLink';

describe('CardLink', () => {
  it('should render with "card-link" class', () => {
    const tree = renderIntoDocument(<CardLink>Yo!</CardLink>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'card-link')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardLink className="other">Yo!</CardLink>);

    expect(hasClass(tree.$V, 'other')).toBe(true);
    expect(hasClass(tree.$V, 'card-link')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardLink tag="button">Yo!</CardLink>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'card-link')).toBe(true);
    expect(getTagName(tree.$V)).toBe('button');
  });
});
