<h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />





      onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course });
      }

      onClickSave() {
        this.props.actions.createCourse(this.state.course);
      }


      removed binds from constructor



this.onTitleChange = this.onTitleChange.bind(this);
this.onClickSave = this.onClickSave.bind(this);

state initialization

this.state = {
  course: { title: "" }
};
