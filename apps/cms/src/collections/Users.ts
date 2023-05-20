import { CollectionConfig } from "payload/types";
import adminsAndUser from "../access/adminsAndUser";
import { anyone } from "../access/anyone";
import { admins } from "../access/admins";
import { checkRole } from "../hooks/checkRole";

export const UserFields: CollectionConfig["fields"] = [
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

const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email"],
  },
  auth: true,
  fields: UserFields,
};

export default Users;
