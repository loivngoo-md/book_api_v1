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
exports.MyTimesheetService = void 0;
const repositories_1 = require("../../dataAccess/repositories");
const core_1 = require("../core");
const base_1 = require("./base");
const enums_1 = require("../enums");
class MyTimesheetService extends base_1.BaseService {
    constructor() {
        super(new repositories_1.MyTimesheetRepository());
        this._projectTaskRepos = new repositories_1.ProjectTaskRepository();
        this._projectRepos = new repositories_1.ProjectRepository();
        this._customerRepos = new repositories_1.CustomerRepository();
        this._taskRepos = new repositories_1.TaskRepository();
        this.saveList = (items, userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = [];
                for (let item of items) {
                    item.userId = userId;
                    const saved = yield this.create(item);
                    result.push(saved);
                }
                return result;
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in business logic: ${error}`);
            }
        });
        this.create = (item) => __awaiter(this, void 0, void 0, function* () {
            try {
                item.dateAt = new Date(item.dateAt);
                return yield this._repos.save(item);
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
        this.get = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.findById(id);
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in business logic: ${error}`);
            }
        });
        this.submitToPending = (userId, date) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._repos.submitToPending(userId, date);
                return result;
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in business logic: ${error}`);
            }
        });
        this.getAllTimesheetOfUser = (userId, startDate, endDate) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = [];
                const myTimesheets = yield this._repos.getAllTimesheetOfUser(userId, startDate, endDate);
                for (let myTimesheet of myTimesheets) {
                    const projectTask = yield this._projectTaskRepos.findById(myTimesheet.projectTaskId);
                    const project = yield this._projectRepos.findById(projectTask.projectId);
                    const task = yield this._taskRepos.findById(projectTask.taskId);
                    const customer = yield this._customerRepos.findCustomerByCustomerId(project.customerId);
                    const item = {
                        id: myTimesheet.id,
                        projectName: project.name,
                        taskName: task.name,
                        projectTaskId: myTimesheet.projectTaskId,
                        customerName: customer.name,
                        projectCode: project.code,
                        dateAt: myTimesheet.dateAt,
                        workingTime: myTimesheet.workingTime,
                        status: myTimesheet.status,
                        note: myTimesheet.note,
                        typeOfWork: myTimesheet.typeOfWork,
                        isCharged: myTimesheet.isCharged,
                        billable: projectTask.billable,
                    };
                    result.push(item);
                }
                return result;
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in business logic: ${error}`);
            }
        });
    }
}
exports.MyTimesheetService = MyTimesheetService;
Object.seal(MyTimesheetService);
//# sourceMappingURL=MyTimesheetService.js.map