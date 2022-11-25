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
exports.UserRepository = void 0;
const _1 = require(".");
const schemas_1 = require("../schemas");
const base_1 = require("./base");
const constants_1 = require("../../app/constants");
class UserRepository extends base_1.BaseRepository {
    constructor() {
        super("users", schemas_1.UserSchema);
        this._projectUsersRepos = new _1.ProjectUsersRepository();
        this.resetPassword = (adminPassword, id, newPassword) => __awaiter(this, void 0, void 0, function* () {
            if (yield this._model.find({ id, password: adminPassword })) {
                return yield this._model.updateOne({ id }, { password: newPassword });
            }
            return false;
        });
        this.deactive = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.updateOne({ id }, { isActive: constants_1.DEACTIVE_USER });
        });
        this.active = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.updateOne({ id }, { isActive: constants_1.ACTIVE_USER });
        });
        this.findManager = (managerId) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.findOne({ managerId });
        });
        this.setAvatar = (id, avatarPath) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this._model.updateOne({ id }, { avatarPath });
            if (result) {
                return avatarPath;
            }
        });
        this.findProjectManagers = (id) => __awaiter(this, void 0, void 0, function* () {
            const pms = [];
            let members = yield this._projectUsersRepos.findByMembersByProjectId(id);
            members = members.filter((member) => {
                return member.type == 1;
            });
            for (let member of members) {
                let user = yield this.findById(member.userId);
                pms.push(user.name);
            }
            return pms;
        });
        this.getUserNotPagging = () => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.find({}, "id name isActive type jobTitle level userCode branch avatarPath");
        });
        this.getAllManager = () => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.find({ managerId: { $ne: 0 } }, "id name type isActive jobTitle level userCode branch avatarPath");
        });
        this.getAllPagging = (filter) => __awaiter(this, void 0, void 0, function* () {
            let filterSearch = {};
            for (let item of filter.filterItems) {
                filterSearch[item.propertyName] = item.value;
            }
            const keyword = new RegExp(filter.searchText, "i");
            let items = yield this._model
                .find({}, "id username name surname emailAddress phoneNumber address isActive fullName roleNames type salary salaryAt startDateAt managerId branch sex creationTime morningWorking allowedLeaveDay userCode jobTitle level registerWorkDay morningStartAt morningEndAt afternoonWorking afternoonEndAt avatarPath")
                .skip(filter.skipCount)
                .limit(filter.maxResultCount)
                .lean();
            return items;
        });
    }
}
exports.UserRepository = UserRepository;
Object.seal(UserRepository);
//# sourceMappingURL=UserRepos.js.map