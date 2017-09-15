import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardBody from '../../lib/Card/CardBody.jsx';

describe('CardBody', () => {
  it('should render with "card-body" class', () => {
    const tree = renderIntoDocument(<CardBody>Yo!</CardBody>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-body')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<CardBody className="other">Yo!</CardBody>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'card-body')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardBody tag="main">Yo!</CardBody>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'card-body')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('main')
  });
});
