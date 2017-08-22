import React, { Component } from 'react';
import { Button } from 'reactstrap'

import WebM from './WebM'

class Display extends Component {

  constructor(props) {
    super(props)
    this.state = {
      works: [],
      webfile: 'someString',
      buttonText: 'Begin Your Journey'
    }
  }

  componentDidMount() {
    fetch('/getMemes')
      .then(res => res.json())
      .then(works => this.setState({ works }));
  }

  // Get that randomness for intense MEMEage
  displayMemes() {
    var webfiles = this.state.works[0].urls
    console.log(webfiles.length)
    const item = webfiles[Math.floor(Math.random()*webfiles.length)];
    console.log(item.toString())
    const urlString = "../../images/webms/" + item.toString()
    this.setState (
      {
        webfile: urlString,
        buttonText: 'More Memes'
      }
    );
  }

  render() {
    console.log(this.state)
    return (
      <div className="Display">
      <Button
        onClick={this.displayMemes.bind(this)}
        color="primary">
        {this.state.buttonText}
      </Button>
        <WebM url={this.state.webfile}></WebM>
        <Button color="danger">Danger!</Button>{' '}
      </div>
    );
  }
}

export default Display;
