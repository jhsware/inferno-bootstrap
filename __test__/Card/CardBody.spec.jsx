import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardBody from '../../lib/Card/CardBody';

describe('CardBody', () => {
  it('should render with "card-body" class', () => {
    const DOM = renderIntoElement(<CardBody>Yo!</CardBody>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-body')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<CardBody className="other">Yo!</CardBody>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'card-body')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<CardBody tag="main">Yo!</CardBody>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'card-body')).toBe(true);
    expect(getTagName(DOM)).toBe('main')
  });
});
