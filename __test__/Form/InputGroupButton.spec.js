import { renderIntoElement, hasClass, getTagName } from '../utils'
import InputGroupButton from '../../lib/Form/InputGroupButton';

describe('InputGroupButton', () => {
  it('should render with "div" tag', () => {
    const DOM = renderIntoElement(<InputGroupButton addonType="append">Yo!</InputGroupButton>);

    expect(getTagName(DOM)).toBe('div');
  });

  it('should render with "input-group-append" class', () => {
    const DOM = renderIntoElement(<InputGroupButton addonType="append">Yo!</InputGroupButton>);

    expect(hasClass(DOM, 'input-group-append')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<InputGroupButton addonType="append" tag="main">Yo!</InputGroupButton>);

    expect(getTagName(DOM)).toBe('main');
  });

  describe('Standard usage', () => {
    it('should render children provided', () => {
      const DOM = renderIntoElement(<InputGroupButton addonType="append"><span>Yo!</span></InputGroupButton>);

      expect(DOM.getElementsByTagName('span').length).toBe(1);
    });

    it('should render additional classes', () => {
      const DOM = renderIntoElement(<InputGroupButton addonType="append" className="other"><span>Yo!</span></InputGroupButton>);

      expect(hasClass(DOM, 'other')).toBe(true);
      expect(hasClass(DOM, 'input-group-append')).toBe(true);
    });
  });

  describe('Shorthand usage', () => {
    it('should render a child Button', () => {
      const DOM = renderIntoElement(<InputGroupButton addonType="append">Yo!</InputGroupButton>);

      const elButton = DOM.getElementsByClassName('btn')[0]
      expect(elButton.tagName.toLowerCase()).toBe('button');
    });

    it('should render the string provided in the child Button', () => {
      const DOM = renderIntoElement(<InputGroupButton addonType="append">Yo!</InputGroupButton>);
      const elButton = DOM.getElementsByClassName('btn')[0]
      
      expect(elButton.textContent).toBe('Yo!');
    });

    it('should render additional props on the child Button', () => {
      const DOM = renderIntoElement(<InputGroupButton addonType="append" color="rad">Yo!</InputGroupButton>);
      const elButton = DOM.getElementsByClassName('btn')[0]
      
      expect(hasClass(elButton, 'btn-rad')).toBe(true);
    });

    it('should render additional classes on the child Button', () => {
      const DOM = renderIntoElement(<InputGroupButton addonType="append" className="yo">Yo!</InputGroupButton>);
      const elButton = DOM.getElementsByClassName('btn')[0]

      expect(hasClass(elButton, 'yo')).toBe(true);
    });

    it('should render groupClassName as additional classes on the input-group-append wrapper', () => {
      const DOM = renderIntoElement(<InputGroupButton addonType="append" groupClassName="other">Yo!</InputGroupButton>);

      expect(hasClass(DOM, 'other')).toBe(true);
      expect(hasClass(DOM, 'input-group-append')).toBe(true);
    });

    it('should render groupAttributes as additional attributes on the input-group-append wrapper', () => {
      const DOM = renderIntoElement(<InputGroupButton addonType="append" groupAttributes={{ style: { "text-align": 'left' } }}>Yo!</InputGroupButton>);
      
      expect(DOM.style['text-align']).toBe('left');
    });
  });
});
