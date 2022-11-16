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
exports.RoleService = void 0;
const core_1 = require("../core");
const base_1 = require("./base");
const enums_1 = require("../enums");
const repositories_1 = require("../../dataAccess/repositories");
class RoleService extends base_1.BaseService {
    constructor() {
        super(new repositories_1.RoleRepository());
        this.create = (item) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.save(item);
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in business logic: ${error}`);
            }
        });
        this.getAll = (query) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.getAll(query);
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in business logic: ${error}`);
            }
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.delete(id);
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in business logic: ${error}`);
            }
        });
    }
}
exports.RoleService = RoleService;
Object.seal(RoleService);
//# sourceMappingURL=RoleService.js.map