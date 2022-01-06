import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-weather-seven-days-api.herokuapp.com/",
  cache: new InMemoryCache(),
});

export default client;
