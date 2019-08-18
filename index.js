const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world'
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
const port = process.env.PORT || 8080;

server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
});
