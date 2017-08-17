import React, { Component } from 'react';
import { Media } from 'reactstrap'
import ReactPlayer from 'react-player'

class WebM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webmURL: "../../images/webms/sad.webm"
    };
  }

  test_func() {
    this.setState(
      {webmURL: '../../images/webms/RUN.webm'}
    );
    alert("Test was called");
  }

  render() {
    return (
      <Media left>
        <ReactPlayer
          url={this.state.webmURL}
          playing
          loop
          width="60%"
          height="40%"
          onClick={this.test_func.bind(this)}
        />
      </Media>
    );
  }
}

export default WebM;
