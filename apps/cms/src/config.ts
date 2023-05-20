import path from "path";
import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import Products from "./collections/Products";
import Categories from "./collections/Categories";
import Media from "./collections/Media";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Products, Categories, Media],
  globals: [],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "payload-schema.graphql"),
  },
  plugins: [
    cloudStorage({
      collections: {
        media: {
          disableLocalStorage: true,
          adapter: s3Adapter({
            config: {
              region: process.env.S3_REGION,
              endpoint: process.env.S3_ENDPOINT,
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
              },
              forcePathStyle: true,
            },
            bucket: process.env.S3_BUCKET,
          }),
        },
      },
    }),
  ],
});
