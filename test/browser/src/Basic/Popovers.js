import Component from 'inferno-component'
import { Section, Stage, Scene, Code, Narrative } from '../components'

import Button from '../../../../lib/Button'
import Popover from '../../../../lib/Popover'
import PopoverHeader from '../../../../lib/PopoverHeader'
import PopoverBody from '../../../../lib/PopoverBody'

export default function () {
  return (
    <Section title="Popovers">
      <Narrative>
        <p>Popovers are built with <a href="http://tether.io/">http://tether.io</a>.</p>
      </Narrative>
      <Stage>
        <Scene>
          <ExamplePopover />
        </Scene>
        <Scene>
          <Narrative>
            This is the code to create a button with a popover:  
          </Narrative> 
          <Code>
{`class ExamplePopover extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.toggle}>
          Launch Popover
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverContent>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverContent>
        </Popover>
      </div>
    );
  }
}`}
          </Code>
        </Scene>
      </Stage>
    </Section>
  )
}

import { Manager, Target, Popper, Arrow, Travel } from 'inferno-popper'

class ExamplePopover extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <Manager>
        <Target>
          <Button id="Popover1" onClick={this.toggle}>
            Launch Popover
          </Button>
        </Target>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </Manager>
    );
  }
}