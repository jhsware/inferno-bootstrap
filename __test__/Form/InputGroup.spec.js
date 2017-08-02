import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'
import { hasClass, getTagName, getInnerHTML } from "../utils"

import InputGroup from '../../lib/Form/InputGroup.jsx';

describe('InputGroup', () => {
  it('should render with "div" tag', () => {
    const tree = renderIntoDocument(<InputGroup>Yo!</InputGroup>);

    expect(getTagName(tree._vNode)).toBe('div');
  });

  it('should render children', () => {
    const tree = renderIntoDocument(<InputGroup>Yo!</InputGroup>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
  });

  it('should render with "input-group" class', () => {
    const tree = renderIntoDocument(<InputGroup>Yo!</InputGroup>);

    expect(hasClass(tree._vNode, 'input-group')).toBe(true);
  });

  it('should render with "input-group-${size}" class when size is passed', () => {
    const tree = renderIntoDocument(<InputGroup size="whatever">Yo!</InputGroup>);

    expect(hasClass(tree._vNode, 'input-group-whatever')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<InputGroup className="other">Yo!</InputGroup>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'input-group')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<InputGroup tag="main">Yo!</InputGroup>);

    expect(getTagName(tree._vNode)).toBe('main');
  });
});
