import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'
import { hasClass, getTagName, getInnerHTML } from "../utils"

import InputGroupButton from '../../lib/Form/InputGroupButton.jsx';
import Button from '../../lib/Button.jsx';

describe('InputGroupButton', () => {
  it('should render with "div" tag', () => {
    const tree = renderIntoDocument(<InputGroupButton>Yo!</InputGroupButton>);

    expect(getTagName(tree._vNode)).toBe('div');
  });

  it('should render with "input-group-btn" class', () => {
    const tree = renderIntoDocument(<InputGroupButton>Yo!</InputGroupButton>);

    expect(hasClass(tree._vNode, 'input-group-btn')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<InputGroupButton tag="main">Yo!</InputGroupButton>);

    expect(getTagName(tree._vNode)).toBe('main');
  });

  describe('Standard usage', () => {
    it('should render children provided', () => {
      const tree = renderIntoDocument(<InputGroupButton><span>Yo!</span></InputGroupButton>);

      expect(getTagName(tree.props.children.props.children)).toBe('span');
    });

    it('should render additional classes', () => {
      const tree = renderIntoDocument(<InputGroupButton className="other"><span>Yo!</span></InputGroupButton>);

      expect(hasClass(tree._vNode, 'other')).toBe(true);
      expect(hasClass(tree._vNode, 'input-group-btn')).toBe(true);
    });
  });

  describe('Shorthand usage', () => {
    it('should render a child Button', () => {
      const tree = renderIntoDocument(<InputGroupButton>Yo!</InputGroupButton>);

      const elButton = findRenderedDOMElementWithClass(tree, 'btn')
      expect(elButton.tagName.toLowerCase()).toBe('button');
    });

    it('should render the string provided in the child Button', () => {
      const tree = renderIntoDocument(<InputGroupButton>Yo!</InputGroupButton>);
      const elButton = findRenderedDOMElementWithClass(tree, 'btn')
      
      expect(elButton.textContent).toBe('Yo!');
    });

    it('should render additional props on the child Button', () => {
      const tree = renderIntoDocument(<InputGroupButton color="rad">Yo!</InputGroupButton>);
      const elButton = findRenderedDOMElementWithClass(tree, 'btn')
      
      expect(elButton.classList.contains('btn-rad')).toBe(true);
    });

    it('should render additional classes on the child Button', () => {
      const tree = renderIntoDocument(<InputGroupButton className="yo">Yo!</InputGroupButton>);
      const elButton = findRenderedDOMElementWithClass(tree, 'btn')

      expect(elButton.classList.contains('yo')).toBe(true);
    });

    it('should render groupClassName as additional classes on the input-group-btn wrapper', () => {
      const tree = renderIntoDocument(<InputGroupButton groupClassName="other">Yo!</InputGroupButton>);

      expect(hasClass(tree._vNode, 'other')).toBe(true);
      expect(hasClass(tree._vNode, 'input-group-btn')).toBe(true);
    });

    it('should render groupAttributes as additional attributes on the input-group-btn wrapper', () => {
      const tree = renderIntoDocument(<InputGroupButton groupAttributes={{ style: { textAlign: 'left' } }}>Yo!</InputGroupButton>);
      
      expect(tree._vNode.dom.style['text-align']).toBe('left');
    });
  });
});
