import { Section, Stage, Scene, Code } from '../components'

import Form from '../../../../src/Form/Form'
import FormGroup from '../../../../src/Form/FormGroup'
import Input from '../../../../src/Form/Input'
import InputGroup from '../../../../src/Form/InputGroup'
import InputGroupAddon from '../../../../src/Form/InputGroupAddon'
import Label from '../../../../src/Form/Label'

export default function () {
  return (
    <Section title="Input With Addon">
      <Stage>
        <Scene>
          <Form>
            <FormGroup>
              <Label>Email:</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input type="email" name="email" placeholder="example@email.com" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Price:</Label>
              <InputGroup>
                <Input type="number" name="Age" />
                <InputGroupAddon addonType="append">SEK</InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>

          <Code>
{`<Form>
  <FormGroup>
    <Label>Email:</Label>
    <InputGroup>
      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
      <Input type="email" name="email" placeholder="example@email.com" />
    </InputGroup>
  </FormGroup>
  <FormGroup>
    <Label>Price:</Label>
    <InputGroup>
      <Input type="number" name="Age" />
      <InputGroupAddon addonType="append">SEK</InputGroupAddon>
    </InputGroup>
  </FormGroup>
</Form>`}  
          </Code>  
        </Scene>
      </Stage>
    </Section>
  )
}
