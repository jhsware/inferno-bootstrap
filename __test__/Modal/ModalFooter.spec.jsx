import { render } from "inferno"
import { renderIntoElement } from '../utils'

import { getInstance, hasClass, getTagName, getInnerHTML } from "../utils"
import ModalFooter from '../../lib/Modal/ModalFooter';

describe('ModalFooter', () => {
  it('should render with "modal-footer" class', () => {
    const DOM = renderIntoElement(<ModalFooter>Yo!</ModalFooter>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'modal-footer')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<ModalFooter className="other">Yo!</ModalFooter>);

    expect(hasClass(DOM, 'modal-footer')).toBe(true);
    expect(hasClass(DOM, 'other')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<ModalFooter tag="main">Yo!</ModalFooter>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'modal-footer')).toBe(true);
    expect(getTagName(DOM)).toBe('main');
  });
});
