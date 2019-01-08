import { render } from "inferno"
import sinon from "sinon"
import { renderIntoElement } from './utils'
import { 
  scryRenderedDOMElementsWithClass,
  findRenderedDOMElementWithClass,
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode, getAnimationFramePolyfill } from "./utils"

getAnimationFramePolyfill()

import ButtonDropdown from '../lib/ButtonDropdown';
import DropdownToggle from '../lib/DropdownToggle';
import DropdownMenu from '../lib/DropdownMenu';
import DropdownItem from '../lib/DropdownItem';

describe('ButtonDropdown', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
  });

  it('should render a single child', () => {
    const DOM = renderIntoElement(<ButtonDropdown isOpen={isOpen} toggle={toggle}>Ello world</ButtonDropdown>);

    expect(DOM.getElementsByClassName('btn-group').innerHTML).toBe('Ello world');
  });

  it('should render multiple children when isOpen', () => {
    isOpen = true;
    
    const DOM = renderIntoElement(
      <ButtonDropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );

    expect(DOM.getElementsByClassName('btn').innerHTML).toBe('Toggle');
    expect(DOM.getElementsByClassName('btn-group').length).toBe(1);
    expect(DOM.getElementsByClassName('dropdown-item').length).toBe(1);
    // expect(wrapper.children().length).toBe(2);
  });
});
