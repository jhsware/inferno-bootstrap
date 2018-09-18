import { Section, Stage, Scene, Code, Narrative } from '../components'

import Container from '../../../../src/Container'
import Row from '../../../../src/Row'
import Col from '../../../../src/Col'

export default function () {
  return (
    <Section title="Layout" className="ExampleLayout">
      <Narrative>
        <p>Organise content in rows and columns.</p>  
      </Narrative>  
      <Stage>
        <h3>Standard alert box</h3>  
        <Scene>
          <Container>
            <Row>
              <Col>.col</Col>
            </Row>
            <Row>
              <Col>.col</Col>
              <Col>.col</Col>
              <Col>.col</Col>
              <Col>.col</Col>
            </Row>
            <Row>
              <Col xs="3">.col-3</Col>
              <Col xs="auto">.col-auto - variable width content</Col>
              <Col xs="3">.col-3</Col>
            </Row>
            <Row>
              <Col xs="6">.col-6</Col>
              <Col xs="6">.col-6</Col>
            </Row>
            <Row>
              <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
              <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
              <Col sm="4">.col .col-sm-4</Col>
            </Row>
            <Row>
              <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>.col .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2</Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>.col .col-sm-12 .col-md-6 .col-md-offset-3</Col>
            </Row>
            <Row>
              <Col sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
              <Col sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
            </Row>
          </Container>
          <Code>
{`<Container>
  <Row>
    <Col>.col</Col>
  </Row>
  <Row>
    <Col>.col</Col>
    <Col>.col</Col>
    <Col>.col</Col>
    <Col>.col</Col>
  </Row>
  <Row>
    <Col xs="3">.col-3</Col>
    <Col xs="auto">.col-auto - variable width content</Col>
    <Col xs="3">.col-3</Col>
  </Row>
  <Row>
    <Col xs="6">.col-6</Col>
    <Col xs="6">.col-6</Col>
  </Row>
  <Row>
    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
    <Col sm="4">.col .col-sm-4</Col>
  </Row>
  <Row>
    <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>.col .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2</Col>
  </Row>
  <Row>
    <Col sm="12" md={{ size: 8, offset: 2 }}>.col .col-sm-12 .col-md-6 .col-md-offset-3</Col>
  </Row>
  <Row>
    <Col sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
    <Col sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
  </Row>
</Container>`}
          </Code> 
        </Scene>
      </Stage>
    </Section>
  )
}
