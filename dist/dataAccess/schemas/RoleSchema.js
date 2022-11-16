"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSchema = void 0;
const mongoose_1 = require("mongoose");
exports.RoleSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    displayName: { type: String },
    normalizedName: { type: String },
    description: { type: String },
    id: { type: Number },
});
//# sourceMappingURL=RoleSchema.js.map