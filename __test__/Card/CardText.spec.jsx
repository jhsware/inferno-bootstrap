import { render } from "inferno"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML, getOuterHTML } from "../utils"

import CardText from '../../lib/Card/CardText';

describe('CardText', () => {
  it('should render with "card-text" class', () => {
    const tree = renderIntoDocument(<CardText>Yo!</CardText>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'card-text')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardText className="other">Yo!</CardText>);

    expect(hasClass(tree.$LI, 'other')).toBe(true);
    expect(hasClass(tree.$LI, 'card-text')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardText tag="span">Yo!</CardText>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'card-text')).toBe(true);
    expect(getTagName(tree.$LI)).toBe('span');
  });
});
