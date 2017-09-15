import { Section, Stage, Scene, Code } from '../components'

import Form from '../../../../lib/Form/Form'
import FormGroup from '../../../../lib/Form/FormGroup'
import Input from '../../../../lib/Form/Input'
import InputGroup from '../../../../lib/Form/InputGroup'
import InputGroupAddon from '../../../../lib/Form/InputGroupAddon'
import InputGroupButton from '../../../../lib/Form/InputGroupButton'
import Label from '../../../../lib/Form/Label'

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
