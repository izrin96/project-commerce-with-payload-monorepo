import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3311/api/graphql",
  documents: "./graphql/**/*.ts",
  generates: {
    "./gql/": {
      preset: "client",
    },
  },
};

export default config;
