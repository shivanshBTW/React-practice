import React, { Component } from 'react';

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.handleParentFn = this.handleParentFn.bind(this);
  }
  handleParentFn(e) {
    this.props.printFn('hello');
    // console.log(e);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleParentFn}>Print Hello in console</button>
      </div>
    );
  }
}
