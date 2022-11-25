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
exports.TimesheetService = void 0;
const repositories_1 = require("../../dataAccess/repositories");
const core_1 = require("../core");
const enums_1 = require("../enums");
const base_1 = require("./base");
class TimesheetService extends base_1.BaseService {
    constructor() {
        super(new repositories_1.MyTimesheetRepository());
        this._projectUserRepos = new repositories_1.ProjectUsersRepository();
        this._projectTaskRepos = new repositories_1.ProjectTaskRepository();
        this._projectRepos = new repositories_1.ProjectRepository();
        this._taskRepos = new repositories_1.TaskRepository();
        this._userRepos = new repositories_1.UserRepository();
        this._customerRepos = new repositories_1.CustomerRepository();
        this.approve = (ids) => __awaiter(this, void 0, void 0, function* () {
            try {
                let i = 0;
                for (let id of ids) {
                    if (yield this._repos.approveTimesheet(id)) {
                        i++;
                    }
                }
                return {
                    fail: " - Fail 0 timesheets.",
                    failedCount: 0,
                    lockDate: ` - Locked date: ${new Date().toLocaleDateString()}.`,
                    success: ` - Success ${i} timesheets.`,
                    successCount: i,
                };
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in timesheet service: ${error}`);
            }
        });
        this.reject = (ids) => __awaiter(this, void 0, void 0, function* () {
            try {
                let i = 0;
                for (let id of ids) {
                    if (yield this._repos.rejectTimesheet(id)) {
                        i++;
                    }
                }
                return {
                    lockDate: ` - Locked date: ${new Date().toLocaleDateString()}.`,
                    success: ` - Success ${i} timesheets.`,
                    successCount: i,
                    fail: " - Fail 0 timesheets.",
                    failedCount: 0,
                };
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in timesheet service: ${error}`);
            }
        });
        this.getAll = (start, end, status) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = [];
                const startDate = new Date(start);
                const endDate = new Date(end);
                let myTimesheets;
                myTimesheets = yield this._repos.getAllTimeSheetByStatus(status, startDate, endDate);
                for (let myTimesheet of myTimesheets) {
                    const projectTask = yield this._projectTaskRepos.findById(myTimesheet.projectTaskId);
                    const task = yield this._taskRepos.findById(projectTask.taskId);
                    const project = yield this._projectRepos.findById(projectTask.projectId);
                    const listPM = yield this._userRepos.findProjectManagers(project.id);
                    const customer = yield this._customerRepos.findCustomerByCustomerId(project.customerId);
                    let isUserInProject = true;
                    const projectUsers = yield this._projectUserRepos.findByMembersByProjectId(project.id);
                    for (let projectUser of projectUsers) {
                        const user = yield this._userRepos.findById(projectUser.userId);
                        if (myTimesheet.userId === user.id) {
                            const item = yield {
                                id: myTimesheet.id,
                                projectId: project.id,
                                userId: user.id,
                                user: user.name,
                                customerName: customer.name,
                                projectCode: project.code,
                                projectName: project.name,
                                taskId: task.id,
                                taskName: task.name,
                                status: myTimesheet.status,
                                typeOfWork: myTimesheet.typeOfWork,
                                workingTime: myTimesheet.workingTime,
                                dateAt: myTimesheet.dateAt,
                                mytimesheetNote: myTimesheet.note,
                                isCharged: myTimesheet.isCharged,
                                isUserInProject,
                                branch: user.branch,
                                branchName: user.branch + "",
                                type: user.type,
                                level: user.level,
                                avatarPath: user.avatarPath,
                                listPM,
                            };
                            result.push(item);
                        }
                    }
                }
                return result;
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in timesheet service: ${error}`);
            }
        });
    }
}
exports.TimesheetService = TimesheetService;
Object.seal(TimesheetService);
//# sourceMappingURL=TimesheetService.js.map