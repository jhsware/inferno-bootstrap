import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'
import { hasClass, getTagName, getInnerHTML, getOuterHTML } from "./utils"

import Col from '../lib/Col.jsx';

describe('Col', () => {
  it('should render default .col-* markup', () => {
    const tree = renderIntoDocument(<Col />);

    expect(getOuterHTML(tree._vNode)).toBe('<div class="col"></div>');
  });

  it('should render children', () => {
    const tree = renderIntoDocument(<Col>Children</Col>);

    expect(getInnerHTML(tree._vNode)).toBe('Children');
  });

  it('should pass additional classNames', () => {
    const tree = renderIntoDocument(<Col className="extra" />);

    expect(hasClass(tree._vNode, 'extra')).toBe(true);
    expect(hasClass(tree._vNode, 'col')).toBe(true);
  });

  it('should allow custom columns to be defined', () => {
    const tree = renderIntoDocument(<Col widths={['base', 'jumbo']} base="4" jumbo="6" />);

    expect(hasClass(tree._vNode, 'col-4')).toBe(true);
    expect(hasClass(tree._vNode, 'col-jumbo-6')).toBe(true);
  });

  it('should allow custom columns to be defined with objects', () => {
    const tree = renderIntoDocument(<Col widths={['base', 'jumbo', 'wtf']} wtf={{ size: 1, push: 2, pull: 3, offset: 4 }} />);

    expect(hasClass(tree._vNode, 'col-wtf-1')).toBe(true);
    expect(hasClass(tree._vNode, 'push-wtf-2')).toBe(true);
    expect(hasClass(tree._vNode, 'pull-wtf-3')).toBe(true);
    expect(hasClass(tree._vNode, 'offset-wtf-4')).toBe(true);
    expect(hasClass(tree._vNode, 'col')).toBe(true);
  });

  it('should pass col size specific classes as Strings', () => {
    const tree = renderIntoDocument(<Col sm="6" />);

    expect(hasClass(tree._vNode, 'col-sm-6')).toBe(true);
    expect(hasClass(tree._vNode, 'col')).toBe(true);
  });

  it('should pass col size specific classes as Numbers', () => {
    const tree = renderIntoDocument(<Col sm={6} />);

    expect(hasClass(tree._vNode, 'col-sm-6')).toBe(true);
    expect(hasClass(tree._vNode, 'col')).toBe(true);
  });

  it('should pass col size as flex with values "auto" or without value', () => {
    const tree = renderIntoDocument(<Col xs="auto" sm />);

    expect(hasClass(tree._vNode, 'col-auto')).toBe(true);
    expect(hasClass(tree._vNode, 'col-sm')).toBe(true);
  });

  it('should pass col size specific classes via Objects', () => {
    const tree = renderIntoDocument(<Col sm={{ size: 6, push: 2, pull: 2, offset: 2 }} />);

    expect(hasClass(tree._vNode, 'col-sm-6')).toBe(true);
    expect(hasClass(tree._vNode, 'col')).toBe(true);
    expect(hasClass(tree._vNode, 'push-sm-2')).toBe(true);
    expect(hasClass(tree._vNode, 'pull-sm-2')).toBe(true);
    expect(hasClass(tree._vNode, 'offset-sm-2')).toBe(true);
  });

  it('should pass col size specific classes via Objects including 0', () => {
    const tree = renderIntoDocument(<Col sm={{ size: 6, push: 0, pull: 0, offset: 0 }} />);

    expect(hasClass(tree._vNode, 'col-sm-6')).toBe(true);
    expect(hasClass(tree._vNode, 'col')).toBe(true);
    expect(hasClass(tree._vNode, 'push-sm-0')).toBe(true);
    expect(hasClass(tree._vNode, 'pull-sm-0')).toBe(true);
    expect(hasClass(tree._vNode, 'offset-sm-0')).toBe(true);
  });

  it('should pass col size when passing via object with size "auto"', () => {
    const tree = renderIntoDocument(<Col
      sm={{ size: 'auto', push: 2, pull: 2, offset: 2 }}
    />);

    expect(hasClass(tree._vNode, 'col-sm-auto')).toBe(true);
  });

  it('should render custom element', () => {
    const tree = renderIntoDocument(<Col el="main">Yo!</Col>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'col')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('main');
  });
});
