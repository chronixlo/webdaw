import React, { Component } from 'react';
import Synth from './Synth';
import Sample from './Sample';
import Audio from './Audio';
import Player from './Player';
import BeatRoll from './BeatRoll';
import kick from './kick.wav';
import hat from './hat.wav';
import snare from './snare.wav';

class App extends Component {
  constructor(props) {
    super(props);

    // this.a = new Synth();

    this.samples = [];

    [kick, hat, snare].forEach(sample => {
      fetch(sample)
      .then(r => r.arrayBuffer())
      .then(r => {
        this.samples.push(new Sample(r));
        this.forceUpdate();
      });
    });
  }

  render() {


    return (
      <div className="app">
        <Player></Player>

        {
          Audio.getSamples().map((sample, i) =>
            <BeatRoll
              onUpdate={beat => this.updateBeat(i, beat)}
              key={i}
            ></BeatRoll>
          )
        }
      </div>
    );
  }

  updateBeat(i, beat) {
    Audio.setBeatPattern(i, beat);
  }
}

export default App;
