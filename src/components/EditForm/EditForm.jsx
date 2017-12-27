import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook, saveBook } from '../../AC/books';

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      year: '',
      pages: '1',
    };

    this.baseState = this.state;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isEdit) {
      const {
        title, author, year, pages,
      } = nextProps.bookData;

      this.setState({
        title,
        author,
        year,
        pages,
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

    const { title, author, year } = this.state;
    const { isEdit, editId } = this.props;

    // TODO: implement empty check
    if (title && author && year) {
      if (isEdit) {
        this.props.saveBook(editId, { id: editId, ...this.state });
      } else {
        this.props.addBook({ ...this.state });
      }
      this.setState({ ...this.baseState });
    }
  };

  render() {
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

export default connect(
  (state) => {
    const { books } = state;
    const isEdit = books.get('isEdit');
    const editId = books.get('editId');

    let bookData;
    if (isEdit) {
      bookData = books.getIn(['entities', editId]);
    }

    return {
      isEdit,
      editId,
      bookData,
    };
  },
  { addBook, saveBook },
)(EditForm);
