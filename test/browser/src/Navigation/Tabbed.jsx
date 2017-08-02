import Component from 'inferno-component'
import { Section, Stage, Scene, Code, Narrative } from '../components.jsx'

import Nav from '../../../../lib/Navigation/Nav.jsx'
import NavItem from '../../../../lib/Navigation/NavItem.jsx'
import NavLink from '../../../../lib/Navigation/NavLink.jsx'
import NavDropdown from '../../../../lib/Navigation/NavDropdown.jsx'
import Dropdown from '../../../../lib/Dropdown.jsx'
import DropdownMenu from '../../../../lib/DropdownMenu.jsx'
import DropdownToggle from '../../../../lib/DropdownToggle.jsx'
import DropdownItem from '../../../../lib/DropdownItem.jsx'

export default function () {
  return (
    <Section title="Tabbed">
      <Stage>
        <Scene>
          <TabbedNavbar />
          <Code>
{`class TabbedNavbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownOpen: false
    }

    this.doToggle = this.doToggle.bind(this)
  }

  doToggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    return (
      <Nav tabs>
        <NavItem>
          <NavLink href="#" active>Link</NavLink>
        </NavItem>
        <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.doToggle}>
          <DropdownToggle nav caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </NavDropdown>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
    )
  }
}`}
          </Code> 
        </Scene>
      </Stage>
    </Section>
  )
}


class TabbedNavbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownOpen: false
    }

    this.doToggle = this.doToggle.bind(this)
  }

  doToggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    return (
      <Nav tabs>
        <NavItem>
          <NavLink href="#" active>Link</NavLink>
        </NavItem>
        <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.doToggle}>
          <DropdownToggle nav caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </NavDropdown>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
    )
  }
}