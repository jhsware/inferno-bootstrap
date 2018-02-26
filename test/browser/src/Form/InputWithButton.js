import { Component } from 'inferno'
import { Section, Stage, Scene, Code, Narrative } from '../components'

import Form from '../../../../lib/Form/Form'
import FormGroup from '../../../../lib/Form/FormGroup'
import Input from '../../../../lib/Form/Input'
import InputGroup from '../../../../lib/Form/InputGroup'
import InputGroupAddon from '../../../../lib/Form/InputGroupAddon'
import InputGroupButtonDropdown from '../../../../lib/Form/InputGroupButtonDropdown'

import Label from '../../../../lib/Form/Label'

import Button from '../../../../lib/Button';
import ButtonDropdown from '../../../../lib/ButtonDropdown';
import DropdownToggle from '../../../../lib/DropdownToggle';
import DropdownMenu from '../../../../lib/DropdownMenu';
import DropdownItem from '../../../../lib/DropdownItem';

export default function () {
  return (
    <Section title="Input With Button">
      <Stage>
        <Scene>
          <Form>
            <FormGroup>
              <Label>Email:</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
                <Input type="email" name="email" placeholder="example@email.com" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Price:</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend"><Button>Button life</Button></InputGroupAddon>
                <Input type="number" name="Age" />
                <SampleDropdownAddonButton addonType="append" color="primary" split/>
              </InputGroup>
            </FormGroup>
          </Form>
          <Code>
{`<Form>
  <FormGroup>
    <Label>Email:</Label>
    <InputGroup>
      <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
      <Input type="email" name="email" placeholder="example@email.com" />
    </InputGroup>
  </FormGroup>
  <FormGroup>
    <Label>Price:</Label>
    <InputGroup>
      <InputGroupAddon addonType="prepend"><Button>Button life</Button></InputGroupAddon>
      <Input type="number" name="Age" />
      <SampleDropdownAddonButton addonType="append" color="primary" split/>
    </InputGroup>
  </FormGroup>
</Form>`}  
          </Code>
          <Narrative>
            This is what the SampleDropdownAddonButton looks like:
          </Narrative>
          <Code>
{`class SampleDropdownAddonButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.doToggle = this.doToggle.bind(this)
  }

  doToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render({ children, addonType, ...props }) {
    return (
      <InputGroupButtonDropdown addonType={addonType} isOpen={this.state.isOpen} toggle={this.doToggle}>
        <DropdownToggle {...props}>{children}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </DropdownMenu>
      </InputGroupButtonDropdown>
    )
  }
}`}

          </Code>
        </Scene>
      </Stage>
    </Section>
  )
}

class SampleDropdownAddonButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.doToggle = this.doToggle.bind(this)
  }

  doToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render({ children, addonType, ...props }) {
    return (
      <InputGroupButtonDropdown addonType={addonType} isOpen={this.state.isOpen} toggle={this.doToggle}>
        <DropdownToggle {...props}>{children}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </DropdownMenu>
      </InputGroupButtonDropdown>
    )
  }
}