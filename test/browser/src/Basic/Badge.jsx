import { Section, Stage, Scene, Narrative } from '../components.jsx'

import Badge from '../../../../lib/Badge.jsx'

export default function () {
  return (
    <Section>
      <h2>Badges</h2>
      <Narrative>
        <p>Small and adaptive tag for adding context to just about any content.</p>
      </Narrative>
      <Stage>
        <Scene>  
          <h2>Some nice text <Badge>new</Badge></h2>
          <h3>Some nice text <Badge>new</Badge></h3>
          <h4>Some nice text <Badge>new</Badge></h4>
        </Scene>
      </Stage>
    </Section>
  )
}
