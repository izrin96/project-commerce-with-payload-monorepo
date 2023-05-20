"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole = void 0;
var checkRole = function (allRoles, user) {
    if (allRoles === void 0) { allRoles = []; }
    console.log(user);
    if (user) {
        if (allRoles.some(function (role) {
            return user === null || user === void 0 ? void 0 : user.roles.some(function (individualRole) {
                return individualRole === role;
            });
        }))
            return true;
    }
    return false;
};
exports.checkRole = checkRole;
