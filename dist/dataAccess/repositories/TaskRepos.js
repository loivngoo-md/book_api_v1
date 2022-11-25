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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const base_1 = require("./base");
const schemas_1 = require("../schemas");
class TaskRepository extends base_1.BaseRepository {
    constructor() {
        super("tasks", schemas_1.TaskSchema);
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.find({}, "name id");
        });
        this.archive = (id) => __awaiter(this, void 0, void 0, function* () {
            const isActived = yield this._model.updateOne({ id }, { $set: { isDeleted: true } });
            return true ? isActived : false;
        });
        this.deArchive = (id) => __awaiter(this, void 0, void 0, function* () {
            const isActived = yield this._model.updateOne({ id }, { $set: { isDeleted: false } });
            return true ? isActived : false;
        });
    }
}
exports.TaskRepository = TaskRepository;
Object.seal(TaskRepository);
//# sourceMappingURL=TaskRepos.js.map