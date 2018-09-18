import { Section, Stage, Scene, Code, Narrative,  } from '../components'

import Card from '../../../../src/Card/Card'
import CardImg from '../../../../src/Card/CardImg'
import CardBody from '../../../../src/Card/CardBody'
import CardLink from '../../../../src/Card/CardLink'
import CardSubtitle from '../../../../src/Card/CardSubtitle'
import CardText from '../../../../src/Card/CardText'
import CardTitle from '../../../../src/Card/CardTitle'
import Button from '../../../../src/Button'

export default function () {
  return (
    <Section title="Basic Card">
      <Narrative>
        <p>Use a card to display content in an engaging and concise manner.</p>  
      </Narrative>  
      <Stage>
        <Scene>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>

          <Code>
{`<Card>
  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
  <CardBody>
    <CardTitle>Card title</CardTitle>
    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    <Button>Button</Button>
  </CardBody>
</Card>`}
          </Code>  
        </Scene>

        <h3>Card with different design</h3>
        <Scene>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle goes here</CardSubtitle>
            </CardBody>
            <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>

          <Code>
{`<Card>
  <CardBody>
    <CardTitle>Card title</CardTitle>
    <CardSubtitle>Card subtitle goes here</CardSubtitle>
  </CardBody>
  <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
  <CardBody>
    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    <CardLink href="#">Card Link</CardLink>
    <CardLink href="#">Another Link</CardLink>
  </CardBody>
</Card>`}
          </Code>  
        </Scene>  
      </Stage>
    </Section>
  )
}
