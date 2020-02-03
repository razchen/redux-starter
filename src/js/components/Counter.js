import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../actions/counter";

export class Counter extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        {this.props.counter}
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counterReducer.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: () => dispatch(incrementCounter()),
    decrementCounter: () => dispatch(decrementCounter())
  };
}

export default connect(mapStateToProps, mapDispatchToProps, null, { incrementCounter, decrementCounter })(Counter);
