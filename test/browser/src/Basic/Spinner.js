import { Section, Stage, Scene, Code, Narrative } from '../components'

import Spinner from '../../../../src/Spinner'

export default function () {
  return (
    <Section title="Spinner">
      <Narrative>
        <p>Spinner allow you to indicate activity, such as network calls.</p>
      </Narrative>
      <Stage>
        <Scene>
          <Spinner color="primary" />
          <Spinner color="secondary" />
          <Spinner color="success" />
          <Spinner color="danger" />
          <Spinner color="warning" />
          <Spinner color="info" />
          <Spinner color="light" />
          <Spinner color="dark" />

          <Spinner size="sm" color="primary" />{' '}
          <Spinner size="sm" color="secondary" />
          
          <Code>
{`<Spinner color="primary" />
<Spinner color="secondary" />
<Spinner color="success" />
<Spinner color="danger" />
<Spinner color="warning" />
<Spinner color="info" />
<Spinner color="light" />
<Spinner color="dark" />

<Spinner size="sm" color="primary" />
<Spinner size="sm" color="secondary" />`}
          </Code>
        </Scene>
      </Stage>
      <Narrative>
        <p>Spinners can also grow.</p>
      </Narrative>
      <Stage>
        <Scene>
          <Spinner type="grow" color="primary" />
          <Spinner type="grow" color="secondary" />
          <Spinner type="grow" color="success" />
          <Spinner type="grow" color="danger" />
          <Spinner type="grow" color="warning" />
          <Spinner type="grow" color="info" />
          <Spinner type="grow" color="light" />
          <Spinner type="grow" color="dark" />
          
          <Code>
{`<Spinner type="grow" color="primary" />
<Spinner type="grow" color="secondary" />
<Spinner type="grow" color="success" />
<Spinner type="grow" color="danger" />
<Spinner type="grow" color="warning" />
<Spinner type="grow" color="info" />
<Spinner type="grow" color="light" />
<Spinner type="grow" color="dark" />`}
          </Code>
        </Scene>
      </Stage>
    </Section>
  )
}