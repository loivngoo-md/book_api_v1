"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTimesheetSchema = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../app/enums");
exports.MyTimesheetSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    projectTaskId: { type: Number },
    note: { type: String },
    workingTime: { type: Number },
    targetUserWorkingTime: { type: Number, default: 0 },
    typeOfWork: { type: Number, enum: enums_1.TimesheetType },
    isCharged: { type: Boolean, default: false },
    dateAt: { type: Date },
    status: { type: Number, enum: enums_1.TimesheetStatus, default: 0 },
    projectTargetUserId: { type: Number },
    userId: { type: Number },
});
//# sourceMappingURL=MyTimesheetSchema.js.map