import { TRANSACTIONS_LOADED } from "../constants/action-types";

const initialState = {
  transactions: []
};

function transactionsReducer(state = initialState, action) {
  if (action.type === TRANSACTIONS_LOADED) {
    return Object.assign({}, state, {
      transactions: state.transactions.concat(action.payload)
    });
  }

  return state;
}

export default transactionsReducer;
