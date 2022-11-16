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
exports.CustomerController = void 0;
const services_1 = require("../services");
const enums_1 = require("../enums");
const core_1 = require("../core");
class CustomerController {
    constructor() {
        this._business = new services_1.CustomerService();
        this.save = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = req.body;
                const result = yield this._business.save(customer);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._business.getAll();
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
    }
}
exports.CustomerController = CustomerController;
Object.seal(CustomerController);
//# sourceMappingURL=CustomerController.js.map