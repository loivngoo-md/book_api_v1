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
exports.BaseRepository = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../../app/enums");
const core_1 = require("../../../app/core");
/**
 * Lack of interface, need to implement 2 interfaces more, IWrite<T>, IRead<T>
 */
class BaseRepository {
    constructor(modelName, schema) {
        this.generateId = () => __awaiter(this, void 0, void 0, function* () {
            const id = Math.floor(Math.random() * 1000000);
            const isValid = yield this.findById(id);
            if (!isValid) {
                return id;
            }
            else {
                this.generateId();
            }
        });
        this.save = (item) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (item.id && (yield this._model.updateOne({ id: item.id }, item))) {
                    return yield this.findById(item.id);
                }
                else {
                    const id = yield this.generateId();
                    const model = new this._model(Object.assign(Object.assign({}, item), { id }));
                    return yield model.save();
                }
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Error in repository: ${error}`);
            }
        });
        this.update = (item) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = item.id;
                return yield this._model.updateOne(id, item);
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Error in repository: ${error}`);
            }
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._model.deleteOne({ id });
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Error in repository: ${error}`);
            }
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._model.findOne({ id: id });
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Error in repository, can not find id`);
            }
        });
        this.findByUsername = (username) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._model.findOne({ username });
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Error in repository`);
            }
        });
        this.findByEmail = (emailAddress) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._model.findOne({ emailAddress });
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Error in repository`);
            }
        });
        this.findbyName = (name) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._model.findOne({ name });
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Error in repository`);
            }
        });
        this.retrieve = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const items = yield this._model.find();
                return items
                    ? items
                    : new core_1.ApiError(enums_1.HttpStatusCode.NOT_FOUND, `Error in repository`);
            }
            catch (error) {
                throw error;
            }
        });
        this._model = (0, mongoose_1.model)(modelName, schema);
    }
}
exports.BaseRepository = BaseRepository;
Object.seal(BaseRepository);
//# sourceMappingURL=BaseRepository.js.map