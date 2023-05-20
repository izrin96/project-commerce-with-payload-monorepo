"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var config_1 = require("payload/config");
var Users_1 = __importDefault(require("./collections/Users"));
var Products_1 = __importDefault(require("./collections/Products"));
var Categories_1 = __importDefault(require("./collections/Categories"));
var Media_1 = __importDefault(require("./collections/Media"));
var plugin_cloud_storage_1 = require("@payloadcms/plugin-cloud-storage");
var s3_1 = require("@payloadcms/plugin-cloud-storage/s3");
exports.default = (0, config_1.buildConfig)({
    admin: {
        user: Users_1.default.slug,
    },
    collections: [Users_1.default, Products_1.default, Categories_1.default, Media_1.default],
    globals: [],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "payload-types.ts"),
    },
    graphQL: {
        schemaOutputFile: path_1.default.resolve(__dirname, "payload-schema.graphql"),
    },
    plugins: [
        (0, plugin_cloud_storage_1.cloudStorage)({
            collections: {
                media: {
                    disableLocalStorage: true,
                    adapter: (0, s3_1.s3Adapter)({
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
