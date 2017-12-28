import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BasicButton from '../Button';

import { addBook, saveBook, clearEdit } from '../../AC/books';

const Root = styled.div`
  padding: 15px;
`;

const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px;
  border: 1px solid #e2e2e2;
`;

const Input = styled.input`
  display: block;
`;

const Label = styled.label`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled(BasicButton)`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

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

  handleClear = () => {
    this.setState({ ...this.baseState });
    this.props.clearEdit();
  };

  render() {
    return (
      <Root>
        <Form onSubmit={this.handleSubmit}>
          <Title>{this.props.isEdit ? 'Edit book' : 'Add book'}</Title>
          <Label>
            Title
            <Input type="text" value={this.state.title} onChange={this.handleChange('title')} />
          </Label>
          <Label>
            Author
            <Input type="text" value={this.state.author} onChange={this.handleChange('author')} />
          </Label>
          <Label>
            Year
            <Input type="text" value={this.state.year} onChange={this.handleChange('year')} />
          </Label>
          <Label>
            Pages
            <Input
              type="number"
              min="1"
              value={this.state.pages}
              onChange={this.handleChange('pages')}
            />
          </Label>
          <Buttons>
            <Button type="submit" title={this.props.isEdit ? 'Save book' : 'Add book'}>
              {this.props.isEdit ? 'Save' : 'Add'}
            </Button>
            <Button
              type="reset"
              title={this.props.isEdit ? 'Cancel' : 'Clear form'}
              onClick={this.handleClear}
            >
              {this.props.isEdit ? 'Cancel' : 'Clear'}
            </Button>
          </Buttons>
        </Form>
      </Root>
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
  { addBook, saveBook, clearEdit },
)(EditForm);
