import React, { Component } from 'react';
import cn from './Util';

class BeatRoll extends Component {
  constructor(props) {
    super(props);

    let pattern = this.props.pattern || new Array(16).fill(false);

    this.state = {
      pattern
    };

    this.props.onUpdate && this.props.onUpdate(pattern);

    this.toggleChecked = this.toggleChecked.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.pattern) {
      this.setState({
        pattern: props.pattern
      });
    }
  }

  render() {
    return (
      <div className="beatroll-container">
        <div className="row">
          {
            this.props.readOnly ||
            [1, 2, 4, 8].map(i =>
              <div
                className="button"
                key={i}
                onClick={() => this.fillEvery(i)}
              >
                %{i}
              </div>
            )
          }
        </div>

        <div className="beatroll">
          {
            this.state.pattern.map((b, i) => 
                <div
                  onClick={e => this.toggleChecked(i)}
                  key={i}
                  className={cn([
                    'beatroll-checkbox',
                    b && (this.props.activeClass || 'beatroll-checkbox-checked'),
                    i % 4 === 0 && 'beatroll-checkbox-separator'
                  ])}
                ></div>
            )
          }
        </div>
      </div>
    );
  }

  toggleChecked(i) {
    if (this.props.readOnly) {
      return;
    }

    let pattern = this.state.pattern.slice();

    pattern[i] = !pattern[i];

    this.updatePattern(pattern);
  }

  updatePattern(pattern) {
    this.setState({
      pattern
    });

    this.props.onUpdate && this.props.onUpdate(pattern);
  }

  fillEvery(d) {
    let pattern = this.state.pattern.map((v, i) => i % d === 0);

    this.updatePattern(pattern);
  }
}

export default BeatRoll;
