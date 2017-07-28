import { Code, Section, Stage, Scene, Narrative } from '../components.jsx'

import Badge from '../../../../lib/Badge.jsx'

export default function () {
  return (
    <Section title="Badges">
      <Narrative>
        <p>Small and adaptive tag for adding context to just about any content.</p>
      </Narrative>
      <Stage>
        <Scene>  
          <h2>Some nice text <Badge>new</Badge></h2>
          <h3>Some nice text <Badge>new</Badge></h3>
          <h4>Some nice text <Badge>new</Badge></h4>

          <Code>
{`<h2>Some nice text <Badge>new</Badge></h2>
<h3>Some nice text <Badge>new</Badge></h3>
<h4>Some nice text <Badge>new</Badge></h4>`}
          </Code>  
        </Scene>
        <Scene>  
          <h5>Some nice text <Badge pill color="danger">10</Badge></h5>
          <p>Some nice text <Badge pill color="danger">10</Badge></p>

          <Code>
{`<h5>Some nice text <Badge pill color="danger">10</Badge></h5>
<p>Some nice text <Badge pill color="danger">10</Badge></p>`}
          </Code>  
        </Scene>
      </Stage>
    </Section>
  )
}
