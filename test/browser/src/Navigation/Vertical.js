import { Section, Stage, Scene, Code, Narrative } from '../components'

import Nav from '../../../../lib/Navigation/Nav'
import NavItem from '../../../../lib/Navigation/NavItem'
import NavLink from '../../../../lib/Navigation/NavLink'

export default function () {
  return (
    <Section title="Vertical">
      <Stage>
        <h3>List Based NavBar</h3>  
        <Scene>
          <Nav vertical>
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
{`<Nav vertical>
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
          <Nav vertical>
            <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
          </Nav>
          <Code>
{`<Nav vertical>
  <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
</Nav>`}
          </Code> 
        </Scene>
      </Stage>
    </Section>
  )
}
