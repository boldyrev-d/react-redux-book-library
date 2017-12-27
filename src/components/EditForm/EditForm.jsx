import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditForm extends Component {
  state = {
    title: '',
    author: '',
    year: '',
    pages: '1',
  };

  componentWillReceiveProps(nextProps) {
    console.log('recieve props');
    console.log('isEdit', nextProps.isEdit);
    console.log('data', nextProps.bookData);

    if (nextProps.isEdit) {
      this.setState({
        ...this.state,
        ...nextProps.bookData,
      });
    }
  }

  handleChange = field => (ev) => {
    this.setState({
      [field]: ev.target.value,
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
  };

  render() {
    // console.log(this.state);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange('title')}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Author"
              value={this.state.author}
              onChange={this.handleChange('author')}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Year"
              value={this.state.year}
              onChange={this.handleChange('year')}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Pages"
              min="1"
              value={this.state.pages}
              onChange={this.handleChange('pages')}
            />
          </div>
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default connect((state) => {
  const { isEdit } = state.books;
  let bookData;

  if (isEdit) {
    bookData = state.books.entities[state.books.editId];
    console.log('asdasdasd', bookData);
  }

  console.log('bookData from connect', bookData);

  return {
    isEdit,
    bookData,
  };
})(EditForm);
