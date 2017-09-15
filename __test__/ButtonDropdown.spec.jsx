import { render } from "inferno"
import sinon from "sinon"
import { 
  renderIntoDocument,
  scryRenderedDOMElementsWithClass,
  scryRenderedDOMElementsWithTag,
  findRenderedDOMElementWithClass,
  findRenderedDOMElementWithTag,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode, getAnimationFramePolyfill } from "./utils"

getAnimationFramePolyfill()

import ButtonDropdown from '../dist/ButtonDropdown';
import DropdownToggle from '../dist/DropdownToggle';
import DropdownMenu from '../dist/DropdownMenu';
import DropdownItem from '../dist/DropdownItem';

debugger

describe('ButtonDropdown', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
  });

  it('should render a single child', () => {
    const tree = renderIntoDocument(<ButtonDropdown isOpen={isOpen} toggle={toggle}>Ello world</ButtonDropdown>);

    expect(findRenderedDOMElementWithClass(tree, 'btn-group').innerHTML).toBe('Ello world');
  });

  it('should render multiple children when isOpen', () => {
    isOpen = true;
    
    const tree = renderIntoDocument(
      <ButtonDropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );

    expect(findRenderedDOMElementWithClass(tree, 'btn').innerHTML).toBe('Toggle');
    expect(scryRenderedDOMElementsWithClass(tree, 'btn-group').length).toBe(1);
    expect(scryRenderedDOMElementsWithClass(tree, 'dropdown-item').length).toBe(1);
    // expect(wrapper.children().length).toBe(2);
  });
});
