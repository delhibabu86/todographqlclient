import gql from 'graphql-tag';

export const CREATE_TODO = gql`
  mutation AddTodo($text: String!, $completed: Boolean!) {
    addTodo(text: $text, completed: $completed){
      id
      text
      completed
    }
  }
`;

export const REMOVE_TODO = gql`
  mutation RemoveTodo($id: ID!) {
    removeTodo(id: $id){
      id
      text
      completed
    }
  }
`;