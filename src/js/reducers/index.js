import { ADD_ARTICLE, POSTS_LOADED } from "../constants/action-types";

const initialState = {
  articles: [
    { title: 'asdf'},
    { title: 'asdxzxc'},
    { title: 'asdfe345rt'},
    { title: 'ertge'}
  ],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
    // return {articles: state.articles.concat(action.payload)}; // The SAME!
  }

  if (action.type === POSTS_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  return state;
}

export default rootReducer;
