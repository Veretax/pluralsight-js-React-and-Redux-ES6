import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('ManageCoursePage', () => {
  it('sets error message when trying to save empty title', () => {
    // option 1: const wrapper = mount(<Provider store={store}><ManageCoursePage/></Provider>);
    const props = {
      authors: [],
      actions: { saveCourse: () => { return Promise.resolve(); }},
      course: {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
      }
    };

    // option 2: we can pass the things it needs by exporting it and importing with braces
    const wrapper = mount(<ManageCoursePage {...props}/>);
    // const saveButton = wrapper.find('input').last();
    // expect(saveButton.prop('type')).toBe('submit');
    const saveButton = wrapper.find('input[type="submit"]');
    expect(saveButton.hasClass('btn-primary')).toBe(true);
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
