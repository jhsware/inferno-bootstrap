import { Section, Stage, Scene, Code, Narrative } from '../components'

import Nav from '../../../../src/Navigation/Nav'
import NavItem from '../../../../src/Navigation/NavItem'
import NavLink from '../../../../src/Navigation/NavLink'

export default function () {
  return (
    <Section title="Horizontal">
      <Stage>
        <h3>List Based NavBar</h3>  
        <Scene>
          <Nav>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
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
          <Code>
{`<Nav>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Another Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink disabled href="#">Disabled Link</NavLink>
  </NavItem>
</Nav>`}
          </Code> 
        </Scene>
        <h3>Link Based NavBar</h3>  
        <Scene>
          <Nav>
            <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
          </Nav>
          <Code>
{`<Nav>
  <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
</Nav>`}
          </Code> 
        </Scene>
      </Stage>
    </Section>
  )
}
