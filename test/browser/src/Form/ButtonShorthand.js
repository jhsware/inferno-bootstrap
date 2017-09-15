import Component from 'inferno-component'
import { Section, Stage, Scene, Code, Narrative } from '../components'

import Form from '../../../../lib/Form/Form'
import FormGroup from '../../../../lib/Form/FormGroup'
import Input from '../../../../lib/Form/Input'
import InputGroup from '../../../../lib/Form/InputGroup'
import InputGroupButton from '../../../../lib/Form/InputGroupButton'
import Label from '../../../../lib/Form/Label'

export default function () {
  return (
    <Section title="Button Shorthand">
      <Narrative>
        <p>Button shorthand is a convenience method for adding just a button. It is triggered when only a single string is the child. A Button will be created and all of the props will be passed to it with the exception of<code>groupClassName</code> and <code>groupAttributes</code>, which are used to added classes and attributes to the wrapping container. This means you can add your <code>onClick</code> and other handlers directly to<code>InputGroupButton</code>. If you want your string to not be wrapped in a button, then you really want to use <code>InputGroupAddon</code> (see Addons above for that).</p>
      </Narrative>
      <Stage>
        <Scene>
          <Form>
            <InputGroup>
              <InputGroupButton>To the Left!</InputGroupButton>
              <Input />
            </InputGroup>
            <br />
            <InputGroup>
              <Input />
              <InputGroupButton color="secondary">To the Right!</InputGroupButton>
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupButton color="danger">To the Left!</InputGroupButton>
              <Input placeholder="and..." />
              <InputGroupButton color="success">To the Right!</InputGroupButton>
            </InputGroup>
          </Form>
          <Code>
{`<Form>
  <InputGroup>
    <InputGroupButton>To the Left!</InputGroupButton>
    <Input />
  </InputGroup>
  <br />
  <InputGroup>
    <Input />
    <InputGroupButton color="secondary">To the Right!</InputGroupButton>
  </InputGroup>
  <br />
  <InputGroup>
    <InputGroupButton color="danger">To the Left!</InputGroupButton>
    <Input placeholder="and..." />
    <InputGroupButton color="success">To the Right!</InputGroupButton>
  </InputGroup>
</Form>`}  
          </Code>  
        </Scene>
      </Stage>
    </Section>
  )
}
