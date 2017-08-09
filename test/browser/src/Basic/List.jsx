import { Section, Stage, Scene, Code, Narrative } from '../components.jsx'

import ListGroup from '../../../../lib/List/ListGroup.jsx'
import ListGroupItem from '../../../../lib/List/ListGroupItem.jsx'
import ListGroupItemHeading from '../../../../lib/List/ListGroupItemHeading.jsx'
import ListGroupItemText from '../../../../lib/List/ListGroupItemText.jsx'

import Badge from '../../../../lib/Badge.jsx'

export default function () {
  return (
    <Section title="List"> 
      <Stage>
        <h3>Standard List</h3>  
        <Scene>
          <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Code>
{`<ListGroup>
  <ListGroupItem>Cras justo odio</ListGroupItem>
  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
  <ListGroupItem>Morbi leo risus</ListGroupItem>
  <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
  <ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>`}
          </Code> 
        </Scene>

        <h3>List With Badges</h3>
        <Scene>
          <ListGroup>
            <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
            <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
            <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
          </ListGroup>
          <Code>
{`<ListGroup>
  <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
  <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
  <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
</ListGroup>`}
          </Code>  
        </Scene>

        <h3>List With Links and Buttons</h3>
        <Scene>
          <ListGroup>
            <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
            <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
            <ListGroupItem active tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem tag="button" action>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Code>
{`<ListGroup>
  <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
  <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
  <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
  <ListGroupItem active tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
  <ListGroupItem tag="button" action>Vestibulum at eros</ListGroupItem>
</ListGroup>`}
          </Code>  
        </Scene>
      </Stage>
    </Section>
  )
}
