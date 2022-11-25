"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectSchema = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../app/enums");
exports.ProjectSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    customerId: { type: Number, required: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
    status: { type: Number, enum: enums_1.ProjectStatus, default: 0 },
    isAllUserBelongTo: { type: Boolean, default: false },
    timeStart: { type: String },
    timeEnd: { type: String },
    note: { type: String },
    projectType: { type: Number, enum: enums_1.ProjectType },
    projectTargetUsers: { type: [], default: [] },
});
//# sourceMappingURL=ProjectSchema.js.map