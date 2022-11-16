"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization = void 0;
const enums_1 = require("../../enums");
const __1 = require("..");
class Authorization {
}
exports.Authorization = Authorization;
_a = Authorization;
Authorization.confirm = (role) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const response = Object.assign(Object.assign({}, __1.ApiResponse), { success: false, error: new __1.ApiError(enums_1.HttpStatusCode.UNAUTHORIZED, `Unauthorized`) });
    let roleNames = req.app.locals.currentUser.roleNames;
    let isPermission = false;
    for (let roleName of roleNames) {
        if (roleName === role) {
            isPermission = true;
            next();
        }
        new __1.ApiError(enums_1.HttpStatusCode.UNAUTHORIZED, `Unauthorized`);
    }
    try {
    }
    catch (error) {
        res.status(enums_1.HttpStatusCode.UNAUTHORIZED).json(response);
    }
    return role;
});
Object.seal(Authorization);
//# sourceMappingURL=authorization.js.map