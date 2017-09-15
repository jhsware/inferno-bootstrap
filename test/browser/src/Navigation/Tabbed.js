import Component from 'inferno-component'
import { Section, Stage, Scene, Code, Narrative } from '../components'

import Nav from '../../../../lib/Navigation/Nav'
import NavItem from '../../../../lib/Navigation/NavItem'
import NavLink from '../../../../lib/Navigation/NavLink'
import NavDropdown from '../../../../lib/Navigation/NavDropdown'
import Dropdown from '../../../../lib/Dropdown'
import DropdownMenu from '../../../../lib/DropdownMenu'
import DropdownToggle from '../../../../lib/DropdownToggle'
import DropdownItem from '../../../../lib/DropdownItem'

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