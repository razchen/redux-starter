import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../constants/action-types";

const initialState = {
    counter: 0
};

function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT_COUNTER) {
      console.log('foo');
    return Object.assign({}, state, {
      counter: state.counter + 1
    });
  }

  if (action.type === DECREMENT_COUNTER) {
    return Object.assign({}, state, {
      counter: state.counter - 1
    });
  }

  return state;
}

export default counterReducer;
