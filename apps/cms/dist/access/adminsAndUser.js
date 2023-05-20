"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkRole_1 = require("../hooks/checkRole");
var adminsAndUser = function (_a) {
    var user = _a.req.user;
    console.log(user);
    if (user) {
        if ((0, checkRole_1.checkRole)(["admin"], user)) {
            return true;
        }
        return {
            id: user.id,
        };
    }
    return false;
};
exports.default = adminsAndUser;
