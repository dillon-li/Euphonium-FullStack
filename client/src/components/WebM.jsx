import React, { Component } from 'react';
import { Media } from 'reactstrap'
import ReactPlayer from 'react-player'

class WebM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webmURL: []
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
      <Media center>
        <ReactPlayer
          url={this.props.url}
          playing
          loop
        />
      </Media>
    );
  }
}

export default WebM;
