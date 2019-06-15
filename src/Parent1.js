import React, { Component } from 'react';
import Child from './Child1';

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.randomFunction = this.randomFunction.bind(this);
  }
  randomFunction(x) {
    console.log(`you asked parent to print this : ${x}`);
  }
  render() {
    return (
      <div>
        <div>
          <Child printFn={this.randomFunction} />
        </div>
      </div>
    );
  }
}
