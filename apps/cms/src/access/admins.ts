import type { AccessArgs } from "payload/config";

import type { User } from "../payload-types";
import { checkRole } from "../hooks/checkRole";

type isAdmin = (args: AccessArgs<any, User>) => boolean;

export const admins: isAdmin = ({ req: { user } }) => {
  console.log(user);
  return checkRole(["admin"], user);
};
