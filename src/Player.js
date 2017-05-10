import React, { Component } from 'react';
import Audio from './Audio';
import BeatRoll from './BeatRoll';
import play from './icons/play.svg';
import pause from './icons/pause.svg';

class Player extends Component {
    constructor() {
        super();

        this.timeout = null;

        this.state = {
            bar: 0,
            tempo: 130,
            playing: false
        };

        this.togglePlay = this.togglePlay.bind(this);
    }

    componentDidMount() {
        this.togglePlay();
    }

    tick() {
        this.timeout = setTimeout(this.tick.bind(this), 1000 * (60 / this.state.tempo / 4));

        Audio.channels.forEach(channel => {
            channel.osc.frequency.value = channel.pattern[this.state.bar];
        });

        Audio.beats.forEach((beat, i) => {
            Audio.beatPatterns[i][this.state.bar] &&
                beat.play();
        });

        this.setState({
            bar: this.state.bar === 15 ? 0 : ++this.state.bar
        });
    }

    render() {
      return (
        <div className="player">
          <div className="player-controls row center-center">
            <div>
              {
                  <img className="button"
                    src={this.state.playing ? pause : play}
                    onClick={this.togglePlay} 
                  />
              }

              <input
                  type="number"
                  className="input-number player-bpm"
                  value={this.state.tempo}
                  onChange={e => {
                      this.setState({
                          tempo: e.target.value
                      })
                  }}
              />
            </div>
          </div>

          <BeatRoll
            pattern={new Array(16).fill(false).map((b, i) => i === this.state.bar)}
            readOnly={true}
            activeClass="bg-secondary"
          ></BeatRoll>
        </div>
      );
    }

    togglePlay() {
      let playing = !this.state.playing;

      if (playing) {
        this.tick();
        Audio.play();
      } else {
        clearTimeout(this.timeout);
        Audio.stop();
      }

      this.setState({
        playing        
      });
    }
}

export default Player;