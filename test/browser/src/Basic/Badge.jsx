import { Section, Stage, Scene } from '../components.jsx'

import Badge from '../../../../lib/Badge.jsx'

export default function () {
  return (
    <Section>
      <h2>Badge Examples</h2>
      <Stage>
        <h2>Some nice text <Badge>new</Badge></h2>
        <h3>Some nice text <Badge>new</Badge></h3>
        <h4>Some nice text <Badge>new</Badge></h4>
      </Stage>
    </Section>
  )
}
