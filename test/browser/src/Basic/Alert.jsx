import { Section, Stage, Scene } from '../components.jsx'

import Alert from '../../../../lib/Alert.jsx'

export default function () {
  return (
    <Section>
      <h2>Alert Examples</h2>
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
      </Stage>
    </Section>
  )
}
