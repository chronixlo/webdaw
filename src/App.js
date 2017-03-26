import React, { Component } from 'react';
import Knob from './Knob';
import Synth from './Synth';
import Player from './Player';

class App extends Component {
  constructor(props) {
    super(props);

    this.a = new Synth();
    // this.b = new Player();
  }

  render() {


    return (
      <div>
        <Knob />
      </div>
    );
  }
}

export default App;
