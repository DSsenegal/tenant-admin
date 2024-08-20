import type { CodegenConfig } from "@graphql-codegen/cli";

require("dotenv").config();

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GRAPHQL_ENDPOINT,
  documents: "graphql/**/*.graphql",
  generates: {
    "graphql/generated/client.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        reactApolloVersion: 3,
      },
    },
  },
};

export default config;
