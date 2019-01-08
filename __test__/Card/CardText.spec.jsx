import { render } from "inferno"
import { renderIntoElement } from '../utils'
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
    const DOM = renderIntoElement(<CardText>Yo!</CardText>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-text')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<CardText className="other">Yo!</CardText>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'card-text')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<CardText tag="span">Yo!</CardText>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-text')).toBe(true);
    expect(getTagName(DOM)).toBe('span');
  });
});
