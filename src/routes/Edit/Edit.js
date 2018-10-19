import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { GET_NOTE } from '../../queries';
import Editor from '../../components/Editor';

export const EDIT_NOTE = gql`
  mutation editNote($id: Int!, $title: String!, $content: String!) @client {
    editNote(id: $id, title: $title, content: $content) {
      id
    }
  }
`;

class Edit extends Component {
  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return (
      <Query query={GET_NOTE} variables={{ id }}>
        {({ data }) =>
          data.note && (
            <Mutation mutation={EDIT_NOTE}>
              {editNote => {
                this.editNote = editNote;
                return (
                  <Editor
                    title={data.note.title}
                    content={data.note.content}
                    id={data.note.id}
                    onSave={this._onSave}
                  />
                );
              }}
            </Mutation>
          )
        }
      </Query>
    );
  }

  _onSave = (title, content, id) => {
    if (title !== '' && content !== '' && id) {
      const {
        history: { push }
      } = this.props;
      this.editNote({ variables: { title, content, id } });
      push(`/note/${id}`);
    }
  };
}

export default Edit;
