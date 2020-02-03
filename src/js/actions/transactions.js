import { TRANSACTIONS_LOADED } from "../constants/action-types";

export function getTransactions() {
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: TRANSACTIONS_LOADED, payload: json });
      });
  }
}
