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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const core_1 = require("../core");
const base_1 = require("./base");
const enums_1 = require("../enums");
const pick_1 = __importDefault(require("../helpers/pick"));
const repositories_1 = require("../../dataAccess/repositories");
class UserService extends base_1.BaseService {
    constructor() {
        super(new repositories_1.UserRepository());
        this._projectRepos = new repositories_1.ProjectRepository();
        this._roleRepos = new repositories_1.RoleRepository();
        this._projectUsersRepos = new repositories_1.ProjectUsersRepository();
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this._repos.delete(id);
        });
        this.update = (item) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.save(item);
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error is: ${error}`);
            }
        });
        this.get = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this._repos.findById(id);
        });
        this.resetPassword = (adminPassword, id, newPassword) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.resetPassword(adminPassword, id, newPassword);
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Having error in business: ${error}`);
            }
        });
        this.active = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.active(id);
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Having error in business: ${error}`);
            }
        });
        this.deactive = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.deactive(id);
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Having error in business: ${error}`);
            }
        });
        this.getRoles = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const items = yield this._roleRepos.getRoles();
                return { items: items, totalCount: null };
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Having error in business: ${error}`);
            }
        });
        this.updateOwnAvatar = (id, path) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.setAvatar(id, path);
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Having error in business: ${error}`);
            }
        });
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                const isExist = yield this._repos.findByEmail(user.emailAddress);
                if (isExist) {
                    throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Email is already exist, try again`);
                }
                const result = yield this._repos.save(user);
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        this.getUserNotPagging = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.getUserNotPagging();
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Having error in business: ${error}`);
            }
        });
        this.getAllManager = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.getAllManager();
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Having error in business`);
            }
        });
        this.getAllPagging = (filter) => __awaiter(this, void 0, void 0, function* () {
            try {
                const items = [];
                let users = yield this._repos.getAllPagging(filter);
                for (let user of users) {
                    user = (0, pick_1.default)(user, [
                        "username",
                        "name",
                        "surname",
                        "emailAddress",
                        "phoneNumber",
                        "address",
                        "isActive",
                        "fullName",
                        "roleNames",
                        "type",
                        "salary",
                        "salaryAt",
                        "startDateAt",
                        "allowedLeaveDay",
                        "userCode",
                        "jobTitle",
                        "level",
                        "registerWorkDay",
                        "managerId",
                        "branch",
                        "sex",
                        "avatarPath",
                        "morningWorking",
                        "morningStartAt",
                        "morningEndAt",
                        "afternoonWorking",
                        "afternoonStartAt",
                        "afternoonEndAt",
                        "isWorkingTimeDefault",
                        "isStopWork",
                        "id",
                    ]);
                    const manager = yield this._repos.findManager(user.managerId);
                    const projectUsers = [];
                    const pus = yield this._projectUsersRepos.findByUserId(user.id);
                    for (let pu of pus) {
                        const project = yield this._projectRepos.findById(pu.projectId);
                        const pms = yield this._repos.findProjectManagers(project.id);
                        yield projectUsers.push({
                            projectId: project.id,
                            projectCode: project.code,
                            projectName: project.name,
                            projectUserType: pu.type,
                            pms,
                        });
                    }
                    const item = yield Object.assign(Object.assign({}, user), { projectUsers, managerAvatarPath: manager.avatarPath, managerName: manager.name });
                    yield items.push(item);
                }
                return {
                    totalCount: users.length,
                    items,
                };
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Having error in business`);
            }
        });
    }
}
exports.UserService = UserService;
Object.seal(UserService);
//# sourceMappingURL=UserService.js.map