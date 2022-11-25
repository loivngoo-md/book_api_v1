"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const schemas_1 = require("../../src/dataAccess/schemas");
exports.UserModel = (0, mongoose_1.model)("users", schemas_1.UserSchema);
//# sourceMappingURL=User.js.map