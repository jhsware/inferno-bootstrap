import { Section, Stage, Scene, Code, Narrative,  } from '../components'

import Card from '../../../../lib/Card/Card'
import CardBody from '../../../../lib/Card/CardBody'
import CardHeader from '../../../../lib/Card/CardHeader'
import CardFooter from '../../../../lib/Card/CardFooter'
import CardText from '../../../../lib/Card/CardText'
import CardTitle from '../../../../lib/Card/CardTitle'
import Button from '../../../../lib/Button'

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
