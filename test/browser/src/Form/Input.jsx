import { Section, Stage, Scene, Code } from '../components.jsx'

import Form from '../../../../lib/Form/Form.jsx'
import FormGroup from '../../../../lib/Form/FormGroup.jsx'
import FormText from '../../../../lib/Form/FormGroup.jsx'
import FormFeedback from '../../../../lib/Form/FormGroup.jsx'
import Label from '../../../../lib/Form/Label.jsx'
import Input from '../../../../lib/Form/Input.jsx'

export default function () {
  return (
    <Section title="Basic Input Elements">
      <Stage>
        <Scene>
          <Form>
            <FormGroup>
              <Label>Title:</Label>
              <Input type="text" name="title" />
            </FormGroup>
            <FormGroup>
              <Label>Age:</Label>
              <Input type="number" name="age" />
            </FormGroup>
            <FormGroup>
              <Label>Filter:</Label>
              <Input type="text" name="filter" placeholder="Type here..." />
            </FormGroup>
            <FormGroup>
              <Label>Password:</Label>
              <Input type="password" name="password" placeholder="Choose wisely..." />
            </FormGroup>
          </Form>
          <Code>
{`<Form>
  <FormGroup>
    <Label>Title:</Label>
    <Input type="text" name="title" />
  </FormGroup>
  <FormGroup>
    <Label>Age:</Label>
    <Input type="number" name="age" />
  </FormGroup>
  <FormGroup>
    <Label>Filter:</Label>
    <Input type="text" name="filter" placeholder="Type here..." />
  </FormGroup>
  <FormGroup>
    <Label>Password:</Label>
    <Input type="password" name="password" placeholder="Choose wisely..." />
  </FormGroup>
</Form>`}
          </Code>  
        </Scene>
      </Stage>
    </Section>
  )
}
