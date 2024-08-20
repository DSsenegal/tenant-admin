import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.GRAPHQL_ENDPOINT,
      fetch: async (uri, options) => {
        const res = await fetch(uri, {
          ...options,
          next: { revalidate: 2 },
        });
        return res;
      },
    }),
  });
});
