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
exports.RoleRepository = void 0;
const base_1 = require("./base");
const schemas_1 = require("../schemas");
class RoleRepository extends base_1.BaseRepository {
    constructor() {
        super("Roles", schemas_1.RoleSchema);
        this.getRoles = () => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.find();
        });
        this.getAll = (query) => __awaiter(this, void 0, void 0, function* () {
            const keyword = new RegExp(query.keyword, "i");
            const totalCount = yield this._model.countDocuments({});
            const items = yield this._model
                .find({
                $or: [
                    { name: keyword },
                    { displayName: keyword },
                    { description: keyword },
                ],
            })
                .skip(query.skipCount)
                .limit(query.maxResultCount);
            return {
                totalCount,
                items,
            };
        });
    }
}
exports.RoleRepository = RoleRepository;
Object.seal(RoleRepository);
//# sourceMappingURL=RoleRepos.js.map