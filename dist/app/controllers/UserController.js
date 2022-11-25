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
exports.UserController = void 0;
const services_1 = require("../services");
const enums_1 = require("../enums");
const core_1 = require("../core");
class UserController {
    constructor() {
        this._business = new services_1.UserService();
        this.active = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = +req.body.id;
                const result = yield this._business.active(id);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.deactive = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.body.id;
            const result = yield this._business.deactive(id);
            const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
            return res.status(enums_1.HttpStatusCode.OK).json(response);
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const item = req.body;
                const result = yield this._business.update(item);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.get = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = +req.query.Id;
                const result = yield this._business.get(id);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.resetPassword = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { adminPassword, userId, newPassword } = req.body;
                const result = yield this._business.resetPassword(adminPassword, userId, newPassword);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.updateAvatar = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = +req.body.userId;
            const avatarPath = `/avatars/${req.file.filename}`;
            const result = yield this._business.updateOwnAvatar(userId, avatarPath);
            const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
            return res.status(enums_1.HttpStatusCode.OK).json(response);
        });
        this.getRoles = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._business.getRoles();
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.updateOwnAvatar = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = +req.app.locals.currentUser.id;
                const avatarPath = `/avatars/${req.file.filename}`;
                const result = yield this._business.updateOwnAvatar(userId, avatarPath);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.getAllPagging = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const filter = req.body;
                const result = yield this._business.getAllPagging(filter);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                delete user.avatarPath;
                user.avatarPath = "https://cdn-icons-png.flaticon.com/512/21/21104.png";
                const result = yield this._business.create(user);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.getUserNotPagging = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._business.getUserNotPagging();
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = +req.query.Id;
                const result = yield this._business.delete(id);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.getAllManager = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._business.getAllManager();
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;
Object.seal(UserController);
//# sourceMappingURL=UserController.js.map