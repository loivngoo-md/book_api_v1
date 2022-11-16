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
exports.TimesheetController = void 0;
const core_1 = require("../core");
const enums_1 = require("../enums");
const services_1 = require("../services");
class TimesheetController {
    constructor() {
        this._business = new services_1.TimesheetService();
        this.retrieve = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = +req.app.locals.currentUser.id;
                const startDate = String(req.query.startDate);
                const endDate = String(req.query.endDate);
                const status = +req.query.status;
                const result = yield this._business.getAll(
                //userId,
                startDate, endDate, status);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.approve = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const ids = req.body;
                yield this.retrieve;
                const result = yield this._business.approve(ids);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.reject = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const ids = req.body;
                const result = yield this._business.reject(ids);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.TimesheetController = TimesheetController;
Object.seal(TimesheetController);
//# sourceMappingURL=TimesheetController.js.map