import { render } from "inferno"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'
import { hasClass, getTagName, getInnerHTML } from "../utils"

import InputGroupButton from '../../lib/Form/InputGroupButton';
import Button from '../../lib/Button';

describe('InputGroupButton', () => {
  it('should render with "div" tag', () => {
    const tree = renderIntoDocument(<InputGroupButton addonType="append">Yo!</InputGroupButton>);

    expect(getTagName(tree.$LI)).toBe('div');
  });

  it('should render with "input-group-append" class', () => {
    const tree = renderIntoDocument(<InputGroupButton addonType="append">Yo!</InputGroupButton>);

    expect(hasClass(tree.$LI, 'input-group-append')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<InputGroupButton addonType="append" tag="main">Yo!</InputGroupButton>);

    expect(getTagName(tree.$LI)).toBe('main');
  });

  describe('Standard usage', () => {
    it('should render children provided', () => {
      const tree = renderIntoDocument(<InputGroupButton addonType="append"><span>Yo!</span></InputGroupButton>);

      expect(getTagName(tree.props.children.props.children)).toBe('span');
    });

    it('should render additional classes', () => {
      const tree = renderIntoDocument(<InputGroupButton addonType="append" className="other"><span>Yo!</span></InputGroupButton>);

      expect(hasClass(tree.$LI, 'other')).toBe(true);
      expect(hasClass(tree.$LI, 'input-group-append')).toBe(true);
    });
  });

  describe('Shorthand usage', () => {
    it('should render a child Button', () => {
      const tree = renderIntoDocument(<InputGroupButton addonType="append">Yo!</InputGroupButton>);

      const elButton = findRenderedDOMElementWithClass(tree, 'btn')
      expect(elButton.tagName.toLowerCase()).toBe('button');
    });

    it('should render the string provided in the child Button', () => {
      const tree = renderIntoDocument(<InputGroupButton addonType="append">Yo!</InputGroupButton>);
      const elButton = findRenderedDOMElementWithClass(tree, 'btn')
      
      expect(elButton.textContent).toBe('Yo!');
    });

    it('should render additional props on the child Button', () => {
      const tree = renderIntoDocument(<InputGroupButton addonType="append" color="rad">Yo!</InputGroupButton>);
      const elButton = findRenderedDOMElementWithClass(tree, 'btn')
      
      expect(elButton.classList.contains('btn-rad')).toBe(true);
    });

    it('should render additional classes on the child Button', () => {
      const tree = renderIntoDocument(<InputGroupButton addonType="append" className="yo">Yo!</InputGroupButton>);
      const elButton = findRenderedDOMElementWithClass(tree, 'btn')

      expect(elButton.classList.contains('yo')).toBe(true);
    });

    it('should render groupClassName as additional classes on the input-group-append wrapper', () => {
      const tree = renderIntoDocument(<InputGroupButton addonType="append" groupClassName="other">Yo!</InputGroupButton>);

      expect(hasClass(tree.$LI, 'other')).toBe(true);
      expect(hasClass(tree.$LI, 'input-group-append')).toBe(true);
    });

    it('should render groupAttributes as additional attributes on the input-group-append wrapper', () => {
      const tree = renderIntoDocument(<InputGroupButton addonType="append" groupAttributes={{ style: { textAlign: 'left' } }}>Yo!</InputGroupButton>);
      
      expect(tree.$LI.dom.style['text-align']).toBe('left');
    });
  });
});
