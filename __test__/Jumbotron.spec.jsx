import { render } from "inferno"
import sinon from "sinon"
import { renderIntoElement } from './utils'
import { 
  scryRenderedDOMElementsWithTag,
  findRenderedDOMElementWithTag,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML, getOuterHTML } from "./utils"

import Jumbotron from '../lib/Jumbotron';

describe('Jumbotron', () => {
  it('should render children', () => {
    const DOM = renderIntoElement(<Jumbotron>Hello World</Jumbotron>);

    expect(DOM.innerHTML).toBe('Hello World');
  });

  it('should render elements as children', () => {
    const DOM = renderIntoElement(<Jumbotron><h1>Hello from h1</h1></Jumbotron>);

    expect(DOM.getElementsByTagName('h1').length).toBe(1);
    expect(DOM.getElementsByTagName('h1')[0].innerHTML).toBe('Hello from h1');
  });

  it('should have class jumbotron', () => {
    const DOM = renderIntoElement(<Jumbotron>Hello</Jumbotron>);

    expect(hasClass(DOM, 'jumbotron')).toBe(true);
  });

  it('should render fluid jumbotron', () => {
    const DOM = renderIntoElement(<Jumbotron fluid>Hello</Jumbotron>);

    expect(hasClass(DOM, 'jumbotron')).toBe(true);
    expect(hasClass(DOM, 'jumbotron-fluid')).toBe(true);
  });

  it('should render custom class', () => {
    const DOM = renderIntoElement(<Jumbotron className="custom-class">Hello</Jumbotron>);

    expect(hasClass(DOM, 'custom-class')).toBe(true);
  });
});
