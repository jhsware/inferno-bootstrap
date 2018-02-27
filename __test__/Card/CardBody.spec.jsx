import { render } from "inferno"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardBody from '../../dist/Card/CardBody';

describe('CardBody', () => {
  it('should render with "card-body" class', () => {
    const tree = renderIntoDocument(<CardBody>Yo!</CardBody>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'card-body')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardBody className="other">Yo!</CardBody>);

    expect(hasClass(tree.$V, 'other')).toBe(true);
    expect(hasClass(tree.$V, 'card-body')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardBody tag="main">Yo!</CardBody>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'card-body')).toBe(true);
    expect(getTagName(tree.$V)).toBe('main')
  });
});
