import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML, getOuterHTML } from "../utils"

import CardText from '../../lib/Card/CardText.jsx';

describe('CardText', () => {
  it('should render with "card-text" class', () => {
    const tree = renderIntoDocument(<CardText>Yo!</CardText>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-text')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardText className="other">Yo!</CardText>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'card-text')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardText tag="span">Yo!</CardText>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-text')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('span');
  });
});
