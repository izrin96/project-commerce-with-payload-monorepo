import type { Access } from "payload/config";

export const adminsOrPublished: Access = ({ req: { user } }) => {
  // todo
  console.log(user);
  return true;
};
