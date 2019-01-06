import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', function() {
  it('Should handle creating courses', function () {
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "Clean Code"
    };

    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    const actual = store.getState().courses[0];
    const expected = {
      title: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });

  it('Should handle updating courses', function () {

    const courses = [
      { id: 'clean-code', title: "Clean Code" },
      { id: 'refactor-code', title: "More Elegant Coder"},
      { id: 'fun-with-ides', tite: "Fun with IDEs, the tooling that builds software"}
    ];

    const initialState = {
      authors: [],
      courses: courses,
      ajaxCallsInProgress: 0
    };

    const course = { id: 'refactor-code', title: 'More Pragmatic Coder'};

    const store = createStore(rootReducer, initialState);
    const action = courseActions.updateCourseSuccess(course);
    store.dispatch(action);// nothing more

    const updatedCourses = store.getState().courses;

    const actual = updatedCourses.filter(course => course.id == 'refactor-code')[0];
    const expected = {
      id: 'refactor-code', title: "More Pragmatic Coder"
    };

    expect(actual).toEqual(expected);
  });
});
