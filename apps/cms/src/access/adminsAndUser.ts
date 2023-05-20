import { checkRole } from "../hooks/checkRole";
import type { Access } from "payload/types";

const adminsAndUser: Access = ({ req: { user } }) => {
  console.log(user);
  if (user) {
    if (checkRole(["admin"], user)) {
      return true;
    }

    return {
      id: user.id,
    };
  }

  return false;
};

export default adminsAndUser;
