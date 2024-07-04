import { REQUEST_TAGS, RECEIVE_TAGS } from "../constants/action-types";

const initialState = [
  {
    isFetching: false,
    tags: [],
  },
];

export default function tags(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TAGS:
      return {
        ...state,
        isFetching: true,
        tags: [],
      };
    case RECEIVE_TAGS:
      return {
        ...state,
        isFetching: false,
        tags: [...action.tags],
      };
    default:
      return state;
  }
}
