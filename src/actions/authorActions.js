import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function loadAuthorsSuccess(courses) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS, courses
  };
}

export function loadCourses() {
  return function(dispatch) {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
