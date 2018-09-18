import { Section, Stage, Scene, Code } from '../components'

import Form from '../../../../src/Form/Form'
import FormGroup from '../../../../src/Form/FormGroup'
import FormText from '../../../../src/Form/FormGroup'
import FormFeedback from '../../../../src/Form/FormGroup'
import Label from '../../../../src/Form/Label'
import Input from '../../../../src/Form/Input'

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
