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
exports.TaskService = void 0;
const core_1 = require("../core");
const base_1 = require("./base");
const repositories_1 = require("../../dataAccess/repositories");
const enums_1 = require("../enums");
class TaskService extends base_1.BaseService {
    constructor() {
        super(new repositories_1.TaskRepository());
        this.save = (item) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.save(item);
            }
            catch (error) {
                throw error;
            }
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.delete(id);
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Having error in business`);
            }
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.getAll();
            }
            catch (error) {
                throw error;
            }
        });
        this.archive = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.archive(id);
            }
            catch (error) {
                throw error;
            }
        });
        this.deArchive = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.deArchive(id);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.TaskService = TaskService;
Object.seal(TaskService);
//# sourceMappingURL=TaskService.js.map