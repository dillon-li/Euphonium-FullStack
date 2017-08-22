import React, { Component } from 'react';

import WebM from './WebM'

class Display extends Component {

  state = {works: []}

  componentDidMount() {
    fetch('/getMemes')
      .then(res => res.json())
      .then(works => this.setState({ works }));
    console.log(this.state)
  }

  render() {
    return (
      <div className="Display">
        <WebM></WebM>
        {this.state.works.map(works =>
          <div key={works.string}>{works.string}</div>
          )}
      </div>
    );
  }
}

export default Display;
