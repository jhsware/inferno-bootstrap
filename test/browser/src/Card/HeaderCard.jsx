import { Section, Stage, Scene, Code, Narrative,  } from '../components.jsx'

import Card from '../../../../lib/Card/Card.jsx'
import CardBody from '../../../../lib/Card/CardBody.jsx'
import CardHeader from '../../../../lib/Card/CardHeader.jsx'
import CardFooter from '../../../../lib/Card/CardFooter.jsx'
import CardText from '../../../../lib/Card/CardText.jsx'
import CardTitle from '../../../../lib/Card/CardTitle.jsx'
import Button from '../../../../lib/Button.jsx'

export default function () {
  return (
    <Section title="Card With Header and Footer">
      <Narrative>
        <p>Use a card to display content in an engaging and concise manner.</p>  
      </Narrative>  
      <Stage>
        <Scene>
          <Card>
            <CardHeader>The Header</CardHeader>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
            <CardFooter className="text-right"><Button color="link">Go now...</Button></CardFooter>
          </Card>

          <Code>
{`<Card>
  <CardHeader>The Header</CardHeader>
  <CardBody>
    <CardTitle>Special Title Treatment</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
  </CardBody>
  <CardFooter className="text-right"><Button color="link">Go now...</Button></CardFooter>
</Card>`}
          </Code>  
        </Scene>
      </Stage>
    </Section>
  )
}
