import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';

class Knob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 33
    };

    this.startY = null;

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  render() {
    return (
      <Box align="center">
        <Meter
          type="arc"
          size="xsmall"
          value={this.state.value}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
        />
        <Value value={this.state.value} />
      </Box>
    );
  }

  handleMouseDown(e) {
    this.startY = e.pageY;
  }

  handleMouseMove(e) {
    if (this.startY === null) {
      return;
    }

    console.log(this.startY - e.pageY);
  }
}

export default Knob;
