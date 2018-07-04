import { render } from "inferno"
import { renderIntoDocument } from '../utils'
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
    const tree = renderIntoDocument(<InputGroup>Yo!</InputGroup>);

    expect(getTagName(tree.$LI)).toBe('div');
  });

  it('should render children', () => {
    const tree = renderIntoDocument(<InputGroup>Yo!</InputGroup>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
  });

  it('should render with "input-group" class', () => {
    const tree = renderIntoDocument(<InputGroup>Yo!</InputGroup>);

    expect(hasClass(tree.$LI, 'input-group')).toBe(true);
  });

  it('should render with "input-group-${size}" class when size is passed', () => {
    const tree = renderIntoDocument(<InputGroup size="whatever">Yo!</InputGroup>);

    expect(hasClass(tree.$LI, 'input-group-whatever')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<InputGroup className="other">Yo!</InputGroup>);

    expect(hasClass(tree.$LI, 'other')).toBe(true);
    expect(hasClass(tree.$LI, 'input-group')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<InputGroup tag="main">Yo!</InputGroup>);

    expect(getTagName(tree.$LI)).toBe('main');
  });
});
