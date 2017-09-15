import { render } from "inferno"
import sinon from "sinon"
import { 
  renderIntoDocument,
  scryRenderedDOMElementsWithTag,
  findRenderedDOMElementWithTag,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML, getOuterHTML } from "./utils"

import Jumbotron from '../dist/Jumbotron';

describe('Jumbotron', () => {
  it('should render children', () => {
    const tree = renderIntoDocument(<Jumbotron>Hello World</Jumbotron>);

    expect(getInnerHTML(tree._vNode)).toBe('Hello World');
  });

  it('should render elements as children', () => {
    const tree = renderIntoDocument(<Jumbotron><h1>Hello from h1</h1></Jumbotron>);

    expect(scryRenderedDOMElementsWithTag(tree, 'h1').length).toBe(1);
    expect(findRenderedDOMElementWithTag(tree, 'h1').innerHTML).toBe('Hello from h1');
  });

  it('should have class jumbotron', () => {
    const tree = renderIntoDocument(<Jumbotron>Hello</Jumbotron>);

    expect(hasClass(tree._vNode, 'jumbotron')).toBe(true);
  });

  it('should render fluid jumbotron', () => {
    const tree = renderIntoDocument(<Jumbotron fluid>Hello</Jumbotron>);

    expect(hasClass(tree._vNode, 'jumbotron')).toBe(true);
    expect(hasClass(tree._vNode, 'jumbotron-fluid')).toBe(true);
  });

  it('should render custom class', () => {
    const tree = renderIntoDocument(<Jumbotron className="custom-class">Hello</Jumbotron>);

    expect(hasClass(tree._vNode, 'custom-class')).toBe(true);
  });
});
