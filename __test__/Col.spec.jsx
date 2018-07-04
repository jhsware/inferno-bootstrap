import { render } from "inferno"
import { renderIntoDocument } from './utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'
import { hasClass, getTagName, getInnerHTML, getOuterHTML } from "./utils"

import Col from '../lib/Col';

describe('Col', () => {
  it('should render default .col-* markup', () => {
    const tree = renderIntoDocument(<Col />);

    expect(getOuterHTML(tree.$LI)).toBe('<div class="col"></div>');
  });

  it('should render children', () => {
    const tree = renderIntoDocument(<Col>Children</Col>);

    expect(getInnerHTML(tree.$LI)).toBe('Children');
  });

  it('should pass additional classNames', () => {
    const tree = renderIntoDocument(<Col className="extra" />);

    expect(hasClass(tree.$LI, 'extra')).toBe(true);
    expect(hasClass(tree.$LI, 'col')).toBe(true);
  });

  it('should allow custom columns to be defined', () => {
    const tree = renderIntoDocument(<Col widths={['base', 'jumbo']} base="4" jumbo="6" />);

    expect(hasClass(tree.$LI, 'col-4')).toBe(true);
    expect(hasClass(tree.$LI, 'col-jumbo-6')).toBe(true);
  });

  it('should allow custom columns to be defined with objects', () => {
    const tree = renderIntoDocument(<Col widths={['base', 'jumbo', 'wtf']} wtf={{ size: 1, push: 2, pull: 3, offset: 4 }} />);

    expect(hasClass(tree.$LI, 'col-wtf-1')).toBe(true);
    expect(hasClass(tree.$LI, 'push-wtf-2')).toBe(true);
    expect(hasClass(tree.$LI, 'pull-wtf-3')).toBe(true);
    expect(hasClass(tree.$LI, 'offset-wtf-4')).toBe(true);
    expect(hasClass(tree.$LI, 'col')).toBe(true);
  });

  it('should pass col size specific classes as Strings', () => {
    const tree = renderIntoDocument(<Col sm="6" />);

    expect(hasClass(tree.$LI, 'col-sm-6')).toBe(true);
    expect(hasClass(tree.$LI, 'col')).toBe(true);
  });

  it('should pass col size specific classes as Numbers', () => {
    const tree = renderIntoDocument(<Col sm={6} />);

    expect(hasClass(tree.$LI, 'col-sm-6')).toBe(true);
    expect(hasClass(tree.$LI, 'col')).toBe(true);
  });

  it('should pass col size as flex with values "auto" or without value', () => {
    const tree = renderIntoDocument(<Col xs="auto" sm />);

    expect(hasClass(tree.$LI, 'col-auto')).toBe(true);
    expect(hasClass(tree.$LI, 'col-sm')).toBe(true);
  });

  it('should pass col size specific classes via Objects', () => {
    const tree = renderIntoDocument(<Col sm={{ size: 6, push: 2, pull: 2, offset: 2 }} />);

    expect(hasClass(tree.$LI, 'col-sm-6')).toBe(true);
    expect(hasClass(tree.$LI, 'col')).toBe(true);
    expect(hasClass(tree.$LI, 'push-sm-2')).toBe(true);
    expect(hasClass(tree.$LI, 'pull-sm-2')).toBe(true);
    expect(hasClass(tree.$LI, 'offset-sm-2')).toBe(true);
  });

  it('should pass col size specific classes via Objects including 0', () => {
    const tree = renderIntoDocument(<Col sm={{ size: 6, push: 0, pull: 0, offset: 0 }} />);

    expect(hasClass(tree.$LI, 'col-sm-6')).toBe(true);
    expect(hasClass(tree.$LI, 'col')).toBe(true);
    expect(hasClass(tree.$LI, 'push-sm-0')).toBe(true);
    expect(hasClass(tree.$LI, 'pull-sm-0')).toBe(true);
    expect(hasClass(tree.$LI, 'offset-sm-0')).toBe(true);
  });

  it('should pass col size when passing via object with size "auto"', () => {
    const tree = renderIntoDocument(<Col
      sm={{ size: 'auto', push: 2, pull: 2, offset: 2 }}
    />);

    expect(hasClass(tree.$LI, 'col-sm-auto')).toBe(true);
  });

  it('should render custom element', () => {
    const tree = renderIntoDocument(<Col tag="main">Yo!</Col>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'col')).toBe(true);
    expect(getTagName(tree.$LI)).toBe('main');
  });
});
