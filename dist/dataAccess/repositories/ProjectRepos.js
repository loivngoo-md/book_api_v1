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
exports.ProjectRepository = void 0;
const base_1 = require("./base");
const schemas_1 = require("../schemas");
const constants_1 = require("../../app/constants");
class ProjectRepository extends base_1.BaseRepository {
    constructor() {
        super("projects", schemas_1.ProjectSchema);
        this.findProjectByFilter = (status, searchKey) => __awaiter(this, void 0, void 0, function* () {
            const name = new RegExp(searchKey, "i");
            if (status == constants_1.INACTIVE_PROJECT) {
                return yield this._model.find({ status: constants_1.INACTIVE_PROJECT });
            }
            if (status == constants_1.ACTIVE_PROJECT) {
                return yield this._model.find({ status: constants_1.ACTIVE_PROJECT });
            }
            return yield this.retrieve();
        });
        this.create = (item) => __awaiter(this, void 0, void 0, function* () {
            return yield this.save(item);
        });
        this.get = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.findOne({ id });
        });
        this.inActive = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.updateOne({ id }, { status: constants_1.INACTIVE_PROJECT });
        });
        this.active = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.updateOne({ id }, { status: constants_1.ACTIVE_PROJECT });
        });
        this.getProjectIncludingTasks = () => __awaiter(this, void 0, void 0, function* () { });
        this.getProjectPM = () => __awaiter(this, void 0, void 0, function* () { });
        this.getProjectUser = () => __awaiter(this, void 0, void 0, function* () { });
        this.getFilter = () => __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.ProjectRepository = ProjectRepository;
Object.seal(ProjectRepository);
//# sourceMappingURL=ProjectRepos.js.map