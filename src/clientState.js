export const defaults = {
  notes: [
    {
      __typename: 'Note',
      id: 1,
      title: 'FIRST',
      content: 'Content'
    }
  ]
};
export const typeDefs = [
  `
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    notes: [Note]!
    note(id: Int!): Note
  }
  type Mutation {
    createNote(title: String!, content: String!): Note
    editNote(id: Int!, title: String!, content: String!): Note
  }
  type Note {
    id: Int!
    title: String!
    content: String!
  }
  `
];
export const resolvers = {
  Mutation: {},
  Query: {
    note: (_, variables, { getCacheKey }) => {
      const id = getCacheKey({ __typename: 'Note', id: variables.id });
      console.log(id);
      return null;
    }
  }
};
