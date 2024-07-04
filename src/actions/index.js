import * as types from "../constants/action-types";

export const requestArticles = () => ({
  type: types.REQUEST_ARTICLES
});

export const receiveArticles = (json) => ({
  type: types.RECEIVE_ARTICLES,
  articles: json,
});

export const requestArticle = (payload) => ({
  type: types.REQUEST_ARTICLE,
  payload,
});

export const receiveArticle = (json) => ({
  type: types.RECEIVE_ARTICLE,
  article: json,
});

export const requestCategories = () => ({
  type: types.REQUEST_CATEGORIES
});

export const receiveCategories = (json) => ({
  type: types.RECEIVE_CATEGORIES,
  categories: json,
});

export const requestTags = () => ({
  type: types.REQUEST_TAGS
});

export const receiveTags = (json) => ({
  type: types.RECEIVE_TAGS,
  tags: json,
});

export const saveArticle = (payload) => ({
  type: types.SAVE_ARTICLE,
  payload,
});

export const savedArticle = (json) => ({
  type: types.SAVED_ARTICLE,
  article: json,
});

export const fetchArticles = () => (dispatch) => {
  dispatch(requestArticles());
  // @todo: move API Base url to .env
  return fetch(`http://127.0.0.1:8000/posts/`)
    .then((response) => response.json())
    .then((json) => dispatch(receiveArticles(json)));
};

export const fetchArticle = (id) => (dispatch) => {
  dispatch(requestArticle(id));
  return fetch(`http://127.0.0.1:8000/posts/${id}`)
    .then((response) => response.json())
    .then((json) => dispatch(receiveArticle(json)));
};

export const fetchCategories = () => (dispatch) => {
  dispatch(requestCategories());
  return fetch(`http://127.0.0.1:8000/categories/`)
    .then((response) => response.json())
    .then((json) => dispatch(receiveCategories(json)));
};

export const fetchTags = () => (dispatch) => {
  dispatch(requestTags());
  return fetch(`http://127.0.0.1:8000/tags/`)
    .then((response) => response.json())
    .then((json) => dispatch(receiveTags(json)));
};

export const save = (payload) => (dispatch) => {
  dispatch(saveArticle(payload));

  return fetch(`http://127.0.0.1:8000/posts/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((json) => dispatch(savedArticle(json)));
};
