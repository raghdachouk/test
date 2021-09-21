import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { SET_LOGGED_IN } from "./queries";

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

export const cache = new InMemoryCache({});

export const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
  typeDefs
});

// initial state
client.writeQuery({
  query: SET_LOGGED_IN,
  data: {
    isLoggedIn: false
  }
});
