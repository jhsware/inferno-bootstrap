import Component from "inferno-component"

import { Section, Stage, Scene, Code, Narrative } from '../components.jsx'

import Button from '../../../../lib/Button.jsx'
import ButtonGroup from '../../../../lib/ButtonGroup.jsx'
import ButtonToolbar from '../../../../lib/ButtonToolbar.jsx'

import ButtonDropdown from '../../../../lib/ButtonDropdown.jsx';
import DropdownToggle from '../../../../lib/DropdownToggle.jsx';
import DropdownMenu from '../../../../lib/DropdownMenu.jsx';
import DropdownItem from '../../../../lib/DropdownItem.jsx';

export default function () {
  return (
    <div>
      <Section title="Buttons">
        <Narrative>
          <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.</p>
        </Narrative>
        <Stage>
          <h3>Standard Buttons</h3>  
          <Scene>
            <Button color="primary">primary</Button>{' '}
            <Button color="secondary">secondary</Button>{' '}
            <Button color="success">success</Button>{' '}
            <Button color="info">info</Button>{' '}
            <Button color="warning">warning</Button>{' '}
            <Button color="danger">danger</Button>{' '}
            <Button color="link">link</Button>

            <Code>
{`<Button color="primary">primary</Button>
<Button color="secondary">secondary</Button>
<Button color="success">success</Button>
<Button color="info">info</Button>
<Button color="warning">warning</Button>
<Button color="danger">danger</Button>
<Button color="link">link</Button>`}
            </Code>
          </Scene>
          <h3>Outline Buttons</h3>
          <Scene>
            <Button outline color="primary">primary</Button>{' '}
            <Button outline color="secondary">secondary</Button>{' '}
            <Button outline color="success">success</Button>{' '}
            <Button outline color="info">info</Button>{' '}
            <Button outline color="warning">warning</Button>{' '}
            <Button outline color="danger">danger</Button>

            <Code>
{`<Button outline color="primary">primary</Button>
<Button outline color="secondary">secondary</Button>
<Button outline color="success">success</Button>
<Button outline color="info">info</Button>
<Button outline color="warning">warning</Button>
<Button outline color="danger">danger</Button>`}
            </Code>
          </Scene>
          <h3>Different sizes</h3>
          <Scene>
            <Button color="primary" size="lg">Large Button</Button>{' '}
            <Button color="secondary" size="lg">Large Button</Button>
            
            <Code>
{`<Button color="primary" size="lg">Large Button</Button>
<Button color="secondary" size="lg">Large Button</Button>`}
            </Code>
          </Scene>

          <Scene>
            <Button color="primary" size="sm">Small Button</Button>{' '}
            <Button color="secondary" size="sm">Small Button</Button>

            <Code>
{`<Button color="primary" size="sm">Small Button</Button>
<Button color="secondary" size="sm">Small Button</Button>`}
            </Code>
          </Scene>

          <h3>Block Level Buttons</h3>
          <Scene>
            <Button color="primary" size="lg" block>Block level button</Button>
            <Button color="secondary" size="lg" block>Block level button</Button>

            <Code>
{`<Button color="primary" size="lg" block>Block level button</Button>
<Button color="secondary" size="lg" block>Block level button</Button>`}
            </Code>
          </Scene>

          <h3>Disabled Buttons</h3>
          <Scene>
            <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
            <Button color="secondary" size="lg" disabled>Button</Button>
            
            <Code>
{`<Button color="primary" size="lg" disabled>Primary button</Button>
<Button color="secondary" size="lg" disabled>Button</Button>`}
            </Code>
          </Scene>

        </Stage>
      </Section>

      <Section title="Radio Buttons">
        <RadioButtonStage />
      </Section>

      <Section title="Button Group">
        <Narrative>
          <p>Group a series of buttons together on a single line with the button group.</p>
        </Narrative>  
        <Stage>
          <Scene>
            <ButtonGroup>
              <Button>Left</Button>{' '}
              <Button>Middle</Button>{' '}
              <Button>Right</Button>
            </ButtonGroup>

            <Code>
{`<ButtonGroup>
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>`}
            </Code>
          </Scene>
        </Stage>
      </Section>

      <Section title="Button Toolbar">
        <Narrative>
          <p>Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.</p>
        </Narrative>
        <Stage>
          <Scene>
            <ButtonToolbar>
              <ButtonGroup className="mr-2">
                <Button>Store</Button>
                <Button>Update</Button>
                <Button>Stay</Button>
                <Button>Flow</Button>
              </ButtonGroup>
              <ButtonGroup className="mr-2">
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button>8</Button>
              </ButtonGroup>
            </ButtonToolbar>

            <Code>
{`<ButtonToolbar>
  <ButtonGroup className="mr-2">
    <Button>Store</Button>
    <Button>Update</Button>
    <Button>Stay</Button>
    <Button>Flow</Button>
  </ButtonGroup>
  <ButtonGroup className="mr-2">
    <Button>5</Button>
    <Button>6</Button>
    <Button>7</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button>8</Button>
  </ButtonGroup>
</ButtonToolbar>`}
            </Code>
          </Scene>
        </Stage>
      </Section>

      <Section title="Button Vertical">
        <Stage>
          <Scene>
            <ButtonGroup vertical>
              <Button>One</Button>
              <Button>Two</Button>
              <SampleDropdownButton caret>Drop me!</SampleDropdownButton>
              <ButtonGroup>
                <Button>Split drop!</Button><SampleDropdownButton split />
              </ButtonGroup>
            </ButtonGroup>

            <Code>
{`<ButtonGroup vertical>
  <Button>One</Button>
  <Button>Two</Button>
  <SampleDropdownButton caret>Drop me!</SampleDropdownButton>
  <ButtonGroup>
    <Button>Split drop!</Button><SampleDropdownButton split />
  </ButtonGroup>
</ButtonGroup>`}
            </Code>
          </Scene>
          <Scene>
            <Narrative>
              This is the code to create the dropdown button:  
            </Narrative>  
            <Code>
{`class SampleDropdownButton extends Component {
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

  render({ children, ...props }) {
    return (
      <ButtonDropdown isOpen={this.state.isOpen} toggle={this.doToggle}>
        <DropdownToggle {...props}>{children}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}`}
            </Code>              
          </Scene>
        </Stage>
      </Section>
    </div>
  )
}

class RadioButtonStage extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <Stage>
        <Scene>
          <h5>Radio Buttons</h5>
          <ButtonGroup>
            <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
          </ButtonGroup>
          <p>Selected: {this.state.rSelected}</p>

          <Code>
{`<ButtonGroup>
  <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
  <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
  <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
</ButtonGroup>`}
          </Code>  
        </Scene>
        <Scene>
          <h5>Checkbox Buttons</h5>
          <ButtonGroup>
            <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
            <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
            <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
          </ButtonGroup>
          <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
          <Code>
{`<ButtonGroup>
  <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
  <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
  <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
</ButtonGroup>`}
          </Code>
        </Scene>
      </Stage>
    );
  }
}

class SampleDropdownButton extends Component {
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

  render({ children, ...props }) {
    return (
      <ButtonDropdown isOpen={this.state.isOpen} toggle={this.doToggle}>
        <DropdownToggle {...props}>{children}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}