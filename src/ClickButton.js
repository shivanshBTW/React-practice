import React, { Component } from 'react';

export default class ClickButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.clickManager = this.clickManager.bind(this);
  }
  clickManager(e) {
    this.setState({ isClicked: true });
  }
  render() {
    return (
      <div>
        <h1>{this.state.isClicked ? 'Clicked!!' : 'Not Clicked :('}</h1>
        <button onClick={this.clickManager}>Click me</button>
      </div>
    );
  }
}
