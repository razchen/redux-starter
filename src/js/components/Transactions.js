import React, { Component } from "react";
import { connect } from "react-redux";
import { getTransactions } from "../actions/transactions";
export class Transaction extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    return (
      <ul>
        {this.props.transactions.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    transactions: state.transactionsReducer.transactions.slice(0, 10)
  };
}

export default connect(mapStateToProps, { getTransactions })(Transaction);
