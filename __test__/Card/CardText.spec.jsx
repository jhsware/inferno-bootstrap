import { render } from "inferno"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML, getOuterHTML } from "../utils"

import CardText from '../../dist/Card/CardText';

describe('CardText', () => {
  it('should render with "card-text" class', () => {
    const tree = renderIntoDocument(<CardText>Yo!</CardText>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'card-text')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardText className="other">Yo!</CardText>);

    expect(hasClass(tree.$V, 'other')).toBe(true);
    expect(hasClass(tree.$V, 'card-text')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardText tag="span">Yo!</CardText>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'card-text')).toBe(true);
    expect(getTagName(tree.$V)).toBe('span');
  });
});
