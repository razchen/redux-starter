import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import rootReducer from "../reducers/index";
import transactionsReducer from "../reducers/transactions";
import counterReducer from "../reducers/counter";
import { forbiddenWordsMiddleware } from "../middleware";
import thunk from "redux-thunk";


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const fooReducers = combineReducers({
    rootReducer,
    transactionsReducer,
    counterReducer,
})

const store = createStore(
    fooReducers,
    applyMiddleware(forbiddenWordsMiddleware, thunk),

);


export default store;