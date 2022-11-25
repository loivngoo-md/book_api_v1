"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../app/enums");
exports.TaskSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    type: {
        type: Number,
        enum: enums_1.Task,
    },
    isDeleted: { type: Boolean, default: false },
    id: { type: Number, required: true },
});
//# sourceMappingURL=TaskSchema.js.map