"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectTaskSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProjectTaskSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    billable: { type: Boolean, default: true },
    taskId: { type: Number },
    projectId: { type: Number },
});
//# sourceMappingURL=ProjectTaskSchema.js.map