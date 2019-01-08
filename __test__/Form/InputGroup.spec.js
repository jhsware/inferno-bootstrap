import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'
import { hasClass, getTagName, getInnerHTML } from "../utils"

import InputGroup from '../../lib/Form/InputGroup';

describe('InputGroup', () => {
  it('should render with "div" tag', () => {
    const DOM = renderIntoElement(<InputGroup>Yo!</InputGroup>);

    expect(getTagName(DOM)).toBe('div');
  });

  it('should render children', () => {
    const DOM = renderIntoElement(<InputGroup>Yo!</InputGroup>);

    expect(DOM.innerHTML).toBe('Yo!');
  });

  it('should render with "input-group" class', () => {
    const DOM = renderIntoElement(<InputGroup>Yo!</InputGroup>);

    expect(hasClass(DOM, 'input-group')).toBe(true);
  });

  it('should render with "input-group-${size}" class when size is passed', () => {
    const DOM = renderIntoElement(<InputGroup size="whatever">Yo!</InputGroup>);

    expect(hasClass(DOM, 'input-group-whatever')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<InputGroup className="other">Yo!</InputGroup>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'input-group')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<InputGroup tag="main">Yo!</InputGroup>);

    expect(getTagName(DOM)).toBe('main');
  });
});
