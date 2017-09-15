import { Section, Stage, Scene, Code, Narrative } from '../components'

import Jumbotron from '../../../../lib/Jumbotron'
import Button from '../../../../lib/Button'

export default function () {
  return (
    <Section title="Jumbotron">
      <Narrative>
        <p>The jumbotron or hero is a content section that gives a nice entry point to important content</p>
      </Narrative>
      <Stage>
        <Scene>
          <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
          
          <Code>
{`<Jumbotron>
  <h1 className="display-3">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-2" />
  <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
  <p className="lead">
    <Button color="primary">Learn More</Button>
  </p>
</Jumbotron>`}
          </Code>
        </Scene>
      </Stage>
    </Section>
  )
}
