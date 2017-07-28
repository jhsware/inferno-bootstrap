import { Section, Stage, Scene, Code, Narrative } from '../components.jsx'

import Progress from '../../../../lib/Progress.jsx'
import Button from '../../../../lib/Button.jsx'

export default function () {
  return (
    <Section title="Progress Bars">
      <Narrative>
        <p>Use progress bars to give feedback on a process completing.</p>
      </Narrative>
      <Stage>
        <Scene>
          <div className="text-center">0%</div>
          <Progress />
          <div className="text-center">25%</div>
          <Progress value="25" />
          <div className="text-center">50%</div>
          <Progress value={50} />
          <div className="text-center">75%</div>
          <Progress value={75} />
          <div className="text-center">100%</div>
          <Progress value="100" />
          <div className="text-center">Multiple bars</div>
          <Progress multi>
            <Progress bar value="15" />
            <Progress bar color="success" value="30" />
            <Progress bar color="info" value="25" />
            <Progress bar color="warning" value="20" />
            <Progress bar color="danger" value="5" />
          </Progress>
          
          <Code>
{`<div className="text-center">0%</div>
<Progress />
<div className="text-center">25%</div>
<Progress value="25" />
<div className="text-center">50%</div>
<Progress value={50} />
<div className="text-center">75%</div>
<Progress value={75} />
<div className="text-center">100%</div>
<Progress value="100" />
<div className="text-center">Multiple bars</div>
<Progress multi>
  <Progress bar value="15" />
  <Progress bar color="success" value="30" />
  <Progress bar color="info" value="25" />
  <Progress bar color="warning" value="20" />
  <Progress bar color="danger" value="5" />
</Progress>`}
          </Code>
        </Scene>
      </Stage>
    </Section>
  )
}
