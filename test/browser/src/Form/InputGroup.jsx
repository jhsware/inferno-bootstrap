import { Section, Stage, Scene, Code } from '../components.jsx'

import Form from '../../../../lib/Form/Form.jsx'
import FormGroup from '../../../../lib/Form/FormGroup.jsx'
import Input from '../../../../lib/Form/Input.jsx'
import InputGroup from '../../../../lib/Form/InputGroup.jsx'
import InputGroupAddon from '../../../../lib/Form/InputGroupAddon.jsx'
import InputGroupButton from '../../../../lib/Form/InputGroupButton.jsx'
import Label from '../../../../lib/Form/Label.jsx'

export default function () {
  return (
    <Section title="Input With Addon">
      <Stage>
        <Scene>
          <Form>
            <FormGroup>
              <Label>Email:</Label>
              <InputGroup>
                <InputGroupAddon>@</InputGroupAddon>
                <Input type="email" name="email" placeholder="example@email.com" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Price:</Label>
              <InputGroup>
                <Input type="number" name="Age" />
                <InputGroupAddon>SEK</InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>

          <Code>
{`<Form>
  <FormGroup>
    <Label>Email:</Label>
    <InputGroup>
      <InputGroupAddon>@</InputGroupAddon>
      <Input type="email" name="email" placeholder="example@email.com" />
    </InputGroup>
  </FormGroup>
  <FormGroup>
    <Label>Price:</Label>
    <InputGroup>
      <Input type="number" name="Age" />
      <InputGroupAddon>SEK</InputGroupAddon>
    </InputGroup>
  </FormGroup>
</Form>`}  
          </Code>  
        </Scene>
      </Stage>
    </Section>
  )
}
