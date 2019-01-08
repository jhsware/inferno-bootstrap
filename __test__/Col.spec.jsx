import { render } from "inferno"
import { renderIntoElement } from './utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'
import { hasClass, getTagName, getInnerHTML, getOuterHTML } from "./utils"

import Col from '../lib/Col';

describe('Col', () => {
  it('should render default .col-* markup', () => {
    const DOM = renderIntoElement(<Col />);

    expect(DOM.outerHTML).toBe('<div class="col"></div>');
  });

  it('should render children', () => {
    const DOM = renderIntoElement(<Col>Children</Col>);

    expect(DOM.innerHTML).toBe('Children');
  });

  it('should pass additional classNames', () => {
    const DOM = renderIntoElement(<Col className="extra" />);

    expect(hasClass(DOM, 'extra')).toBe(true);
    expect(hasClass(DOM, 'col')).toBe(true);
  });

  it('should allow custom columns to be defined', () => {
    const DOM = renderIntoElement(<Col widths={['base', 'jumbo']} base="4" jumbo="6" />);

    expect(hasClass(DOM, 'col-4')).toBe(true);
    expect(hasClass(DOM, 'col-jumbo-6')).toBe(true);
  });

  it('should allow custom columns to be defined with objects', () => {
    const DOM = renderIntoElement(<Col widths={['base', 'jumbo', 'wtf']} wtf={{ size: 1, push: 2, pull: 3, offset: 4 }} />);

    expect(hasClass(DOM, 'col-wtf-1')).toBe(true);
    expect(hasClass(DOM, 'push-wtf-2')).toBe(true);
    expect(hasClass(DOM, 'pull-wtf-3')).toBe(true);
    expect(hasClass(DOM, 'offset-wtf-4')).toBe(true);
    expect(hasClass(DOM, 'col')).toBe(true);
  });

  it('should pass col size specific classes as Strings', () => {
    const DOM = renderIntoElement(<Col sm="6" />);

    expect(hasClass(DOM, 'col-sm-6')).toBe(true);
    expect(hasClass(DOM, 'col')).toBe(true);
  });

  it('should pass col size specific classes as Numbers', () => {
    const DOM = renderIntoElement(<Col sm={6} />);

    expect(hasClass(DOM, 'col-sm-6')).toBe(true);
    expect(hasClass(DOM, 'col')).toBe(true);
  });

  it('should pass col size as flex with values "auto" or without value', () => {
    const DOM = renderIntoElement(<Col xs="auto" sm />);

    expect(hasClass(DOM, 'col-auto')).toBe(true);
    expect(hasClass(DOM, 'col-sm')).toBe(true);
  });

  it('should pass col size specific classes via Objects', () => {
    const DOM = renderIntoElement(<Col sm={{ size: 6, push: 2, pull: 2, offset: 2 }} />);

    expect(hasClass(DOM, 'col-sm-6')).toBe(true);
    expect(hasClass(DOM, 'col')).toBe(true);
    expect(hasClass(DOM, 'push-sm-2')).toBe(true);
    expect(hasClass(DOM, 'pull-sm-2')).toBe(true);
    expect(hasClass(DOM, 'offset-sm-2')).toBe(true);
  });

  it('should pass col size specific classes via Objects including 0', () => {
    const DOM = renderIntoElement(<Col sm={{ size: 6, push: 0, pull: 0, offset: 0 }} />);

    expect(hasClass(DOM, 'col-sm-6')).toBe(true);
    expect(hasClass(DOM, 'col')).toBe(true);
    expect(hasClass(DOM, 'push-sm-0')).toBe(true);
    expect(hasClass(DOM, 'pull-sm-0')).toBe(true);
    expect(hasClass(DOM, 'offset-sm-0')).toBe(true);
  });

  it('should pass col size when passing via object with size "auto"', () => {
    const DOM = renderIntoElement(<Col
      sm={{ size: 'auto', push: 2, pull: 2, offset: 2 }}
    />);

    expect(hasClass(DOM, 'col-sm-auto')).toBe(true);
  });

  it('should render custom element', () => {
    const DOM = renderIntoElement(<Col tag="main">Yo!</Col>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'col')).toBe(true);
    expect(getTagName(DOM)).toBe('main');
  });
});
