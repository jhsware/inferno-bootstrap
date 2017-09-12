
import Component from 'inferno-component';
import { Section, Stage, Scene, Code, Narrative } from '../components.jsx'

import Dropdown from '../../../../lib/Dropdown.jsx';
import DropdownToggle from '../../../../lib/DropdownToggle.jsx';
import DropdownMenu from '../../../../lib/DropdownMenu.jsx';
import DropdownItem from '../../../../lib/DropdownItem.jsx';


export default function () {
  return (
    <Section title="Dropdown Menu">
      <Narrative>
        <p>Simple dropdown menu.</p>  
      </Narrative>  
      <Stage>
        <Scene>
          <DropdownExample />
          <Code>
{`class DropdownExample extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}`}
          </Code>
        </Scene>
      </Stage>
    </Section>
  )
}


class DropdownExample extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
