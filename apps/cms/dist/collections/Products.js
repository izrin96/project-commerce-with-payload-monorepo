"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFields = void 0;
exports.ProductFields = [
    {
        name: "title",
        type: "text",
        required: true,
    },
    {
        type: "tabs",
        tabs: [
            {
                label: "Product Details",
                fields: [
                    {
                        name: "price",
                        label: "Price",
                        type: "number",
                    },
                    {
                        name: "description",
                        label: "Description",
                        type: "richText",
                    },
                ],
            },
        ],
    },
    {
        name: "categories",
        type: "relationship",
        relationTo: "categories",
        hasMany: true,
        admin: {
            position: "sidebar",
        },
    },
];
var Products = {
    slug: "products",
    admin: {
        useAsTitle: "title",
    },
    fields: exports.ProductFields,
};
exports.default = Products;
