import { Component } from 'inferno'
import classnames from 'classnames';
import { Section, Stage, Scene, Code, Narrative } from '../components'

import Tooltip from '../../../../lib/Tooltip';

export default function () {
  return (
    <Section title="Tooltip">
      <Stage>
        <Scene>
          <TooltipExample />
        </Scene>

        <h3>Example Code:</h3>
        <Scene>
          <Code>
{`class TooltipExample extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <p>Somewhere in here is a <a href="#" id="TooltipExample">tooltip</a>.</p>
        <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
          Hello world!
        </Tooltip>
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

class TooltipExample extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <p>Somewhere in here is a <a href="#" id="TooltipExample">tooltip</a>.</p>
        <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
          Hello world!
        </Tooltip>
      </div>
    );
  }
}