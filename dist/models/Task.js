"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = require("mongoose");
const schemas_1 = require("../../src/dataAccess/schemas");
exports.TaskModel = (0, mongoose_1.model)("tasks", schemas_1.TaskSchema);
//# sourceMappingURL=Task.js.map