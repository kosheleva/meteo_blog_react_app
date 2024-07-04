import {
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  REQUEST_ARTICLE,
  RECEIVE_ARTICLE,
  SAVE_ARTICLE,
  SAVED_ARTICLE,
} from "../constants/action-types";

const initialState = [
  {
    isFetching: false,
    articles: [],
    article: null,
  },
];

export default function articles(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        isFetching: true,
        article: state.article,
        articles: [],
      };
    case RECEIVE_ARTICLES:
      return {
        ...state,
        isFetching: false,
        article: state.article,
        articles: [...action.articles],
      };
    case REQUEST_ARTICLE:
      return {
        ...state,
        articles: state.articles,
        isFetching: true,
        article: null,
      };
    case RECEIVE_ARTICLE:
      return {
        ...state,
        articles: state.articles,
        isFetching: false,
        article: action.article,
      };
    case SAVE_ARTICLE:
      return {
        ...state,
        isSaving: true,
      };
    case SAVED_ARTICLE:
      return {
        ...state,
        isSaving: false,
      };
    default:
      return state;
  }
}
