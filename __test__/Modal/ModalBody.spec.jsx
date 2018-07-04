import { render } from "inferno"
import { renderIntoDocument } from '../utils'

import { getInstance, hasClass, getTagName, getInnerHTML } from "../utils"

import ModalBody from '../../lib/Modal/ModalBody'

describe('ModalBody', () => {
  it('should render with "modal-body" class', () => {
    const tree = renderIntoDocument(<ModalBody>Yo!</ModalBody>);

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'modal-body')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<ModalBody className="other">Yo!</ModalBody>);

    expect(hasClass(tree.$LI, 'other')).toBe(true);
    expect(hasClass(tree.$LI, 'modal-body')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<ModalBody tag="main">Yo!</ModalBody>);


    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'modal-body')).toBe(true);
    expect(getTagName(tree.$LI)).toBe('main');
  });
});
