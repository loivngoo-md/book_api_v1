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
exports.MyTimesheetRepository = void 0;
const schemas_1 = require("../schemas");
const base_1 = require("./base");
const constants_1 = require("../../app/constants");
class MyTimesheetRepository extends base_1.BaseRepository {
    constructor() {
        super("myTimesheets", schemas_1.MyTimesheetSchema);
        this.approveTimesheet = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model
                .updateOne({ id }, { status: constants_1.APPROVE_TIMESHEET })
                .exec();
        });
        this.rejectTimesheet = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model
                .updateOne({ id }, { status: constants_1.REJECT_TIMESHEET })
                .lean()
                .exec();
        });
        this.submitToPending = (userId, date) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.updateMany({
                userId,
                status: 0,
                $and: [
                    { dateAt: { $gte: date.startDate } },
                    { dateAt: { $lte: date.endDate } },
                ],
            }, { status: 1 });
        });
        this.getAllTimesheetOfUser = (userId, startDate, endDate) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.find({
                userId,
                $and: [{ dateAt: { $gte: startDate } }, { dateAt: { $lte: endDate } }],
            });
        });
    }
    getAllTimeSheetByStatus(status, startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            if (status === -1) {
                return yield this._model
                    .find({
                    $and: [
                        { dateAt: { $gte: startDate } },
                        { dateAt: { $lte: endDate } },
                    ],
                })
                    .lean();
            }
            else {
                return yield this._model
                    .find({
                    status,
                    $and: [
                        { dateAt: { $gte: startDate } },
                        { dateAt: { $lte: endDate } },
                    ],
                })
                    .lean();
            }
        });
    }
}
exports.MyTimesheetRepository = MyTimesheetRepository;
Object.seal(MyTimesheetRepository);
//# sourceMappingURL=MyTimesheetRepos.js.map