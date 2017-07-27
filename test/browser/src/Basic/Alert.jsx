import { Section, Stage, Scene, Code, Narrative } from '../components.jsx'

import Alert from '../../../../lib/Alert.jsx'

export default function () {
  return (
    <Section>
      <h2>Alerts</h2>
      <Narrative>
        <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>  
      </Narrative>  
      <Stage>
        <Scene>
          <Alert color="success">
            Some cool text in a <b>success</b> alert box!
          </Alert>
        </Scene>
        <Scene>
          <Alert color="warning">
            Some cool text in a <b>warning</b> alert box!
          </Alert>
        </Scene>
        <Scene>
          <Alert color="danger">
            Some cool text in a <b>danger</b> alert box!
          </Alert>
        </Scene>
        <h3>Alert box with close button</h3>
        <Scene>
          <Alert onClose={() => {}}>
            Some cool text in a <b>danger</b> alert box!
          </Alert>
          <Code>
{`<Alert onClose={() => {}}>
  Some cool text in a <b>danger</b> alert box!
</Alert>`}
          </Code>  
        </Scene>
      </Stage>
    </Section>
  )
}
