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
exports.ProjectUsersRepository = void 0;
const base_1 = require("../repositories/base");
const schemas_1 = require("../schemas");
class ProjectUsersRepository extends base_1.BaseRepository {
    constructor() {
        super("projectUsers", schemas_1.ProjectUsersSchema);
        this.findByProjectId = (projectId) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.find({ projectId });
        });
        this.findByUserId = (userId) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.find({ userId });
        });
        this.deleteMany = (projectId) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.deleteMany({ projectId });
        });
        this.findActiveMembers = (projectId) => __awaiter(this, void 0, void 0, function* () {
            let members = yield this._model.find({ projectId });
            members = members.filter((member) => {
                return member.type !== 3;
            });
            return members.length;
        });
        this.findByMembersByProjectId = (projectId) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.find({ projectId });
        });
        this.create = (projectUser, projectId) => __awaiter(this, void 0, void 0, function* () {
            const item = Object.assign(Object.assign({}, projectUser), { projectId });
            return yield this.save(item);
        });
    }
}
exports.ProjectUsersRepository = ProjectUsersRepository;
Object.seal(ProjectUsersRepository);
//# sourceMappingURL=ProjectUsersRepos.js.map