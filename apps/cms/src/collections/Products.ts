import type { CollectionConfig } from "payload/types";
import { admins } from "../access/admins";
import { adminsOrPublished } from "../access/adminsOrPublished";

export const ProductFields: CollectionConfig["fields"] = [
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

const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "title",
  },
  fields: ProductFields,
};

export default Products;
