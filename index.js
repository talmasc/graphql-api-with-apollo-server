const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');

const dataSources = () => ({
  SessionAPI: new SessionAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQL running at ${url}`);
});
