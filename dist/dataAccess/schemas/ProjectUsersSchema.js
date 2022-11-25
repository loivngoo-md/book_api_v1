"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUsersSchema = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../app/enums");
exports.ProjectUsersSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    type: { type: Number, enum: enums_1.ProjectUserType },
    userId: { type: Number, required: true },
    projectId: { type: Number },
});
//# sourceMappingURL=ProjectUsersSchema.js.map