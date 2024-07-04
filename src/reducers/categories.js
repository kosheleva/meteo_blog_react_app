import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
} from "../constants/action-types";

const initialState = [
  {
    isFetching: false,
    categories: [],
  },
];

export default function categories(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return { ...state, isFetching: true, categories: [] };
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        categories: [...action.categories],
      };
    default:
      return state;
  }
}
