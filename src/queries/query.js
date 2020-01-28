import gql from 'graphql-tag';

export const READ_TODOS = gql`
  query getTodos{
    getTodos {
      id
      text
      completed
    }
  }
`;