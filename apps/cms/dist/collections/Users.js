"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFields = void 0;
exports.UserFields = [
    {
        name: "name",
        type: "text",
    },
    {
        name: "roles",
        type: "select",
        hasMany: true,
        defaultValue: ["customer"],
        required: true,
        options: [
            {
                label: "admin",
                value: "admin",
            },
            {
                label: "customer",
                value: "customer",
            },
        ],
    },
    {
        label: "Cart",
        name: "cart",
        type: "group",
        fields: [
            {
                name: "items",
                label: "Items",
                type: "array",
                fields: [
                    {
                        name: "product",
                        type: "relationship",
                        relationTo: "products",
                    },
                    {
                        name: "quantity",
                        type: "number",
                        min: 1,
                        admin: {
                            step: 1,
                        },
                    },
                ],
            },
        ],
    },
];
var Users = {
    slug: "users",
    admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "email"],
    },
    auth: true,
    fields: exports.UserFields,
};
exports.default = Users;
