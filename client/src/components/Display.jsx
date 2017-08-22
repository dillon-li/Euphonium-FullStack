import React, { Component } from 'react';

import WebM from './WebM'

class Display extends Component {

  constructor(props) {
    super(props)
    this.state = {
      works: [],
      webfile: 'someString'
    }
  }

  componentDidMount() {
    fetch('/getMemes')
      .then(res => res.json())
      .then(works => this.setState({ works }));
    console.log("Mounting")
  }

  // Get that randomness for intense MEMEage
  displayMemes() {
    var webfiles = this.state.works[0].webfiles
    console.log(webfiles.length)
    const item = webfiles[Math.floor(Math.random()*webfiles.length)];
    console.log(item.toString())
    const urlString = "../../images/webms/" + item.toString()
    this.setState (
      {webfile: urlString}
    );
  }

  render() {
    console.log(this.state)
    return (
      <div className="Display">
      <button onClick={this.displayMemes.bind(this)}>Click this</button>
        <WebM url={this.state.webfile}></WebM>
      </div>
    );
  }
}

export default Display;
