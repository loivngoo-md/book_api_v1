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
exports.ProjectService = void 0;
const core_1 = require("../core");
const base_1 = require("./base");
const repositories_1 = require("../../dataAccess/repositories");
const enums_1 = require("../enums");
class ProjectService extends base_1.BaseService {
    constructor() {
        super(new repositories_1.ProjectRepository());
        this._taskRepos = new repositories_1.TaskRepository();
        this._projectUsersRepos = new repositories_1.ProjectUsersRepository();
        this._projectTasksRepos = new repositories_1.ProjectTaskRepository();
        this._customerRepos = new repositories_1.CustomerRepository();
        this._userRepos = new repositories_1.UserRepository();
        this.getAll = (status, searchKey) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = [];
                /**
                 * Find project by filter
                 */
                const projects = yield this._repos.findProjectByFilter(status, searchKey);
                /**----------------------------- */
                /**
                 * Handle project
                 */
                for (let project of projects) {
                    const { id, code, status, projectType, timeStart, timeEnd, name } = project;
                    /**
                     * Find customer by customerId
                     */
                    const customer = yield this._customerRepos.findCustomerByCustomerId(project.customerId);
                    /**----------------------------- */
                    /**
                     * Find active member
                     */
                    const activeMember = yield this._projectUsersRepos.findActiveMembers(project.id);
                    /**----------------------------- */
                    /**
                     * Find project managers
                     */
                    const pms = yield this._userRepos.findProjectManagers(project.id);
                    /**----------------------------- */
                    const item = yield {
                        id,
                        code,
                        name,
                        status,
                        pms,
                        timeEnd,
                        timeStart,
                        projectType,
                        activeMember,
                        customerName: customer.name,
                    };
                    yield result.push(item);
                }
                /**---------------------------------------------------------------------- */
                return result;
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in business logic: ${error}`);
            }
        });
        this.save = (item) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._projectTasksRepos.deleteMany(item.id);
                yield this._projectUsersRepos.deleteMany(item.id);
                const tasks = [];
                const users = [];
                const projectTasks = item.tasks;
                const projectUsers = item.users;
                const project = yield this._repos.save(item);
                const id = project.id;
                for (let task of projectTasks) {
                    task.projectId = id;
                    const created = yield this._projectTasksRepos.save(task);
                    tasks.push(created);
                }
                for (let user of projectUsers) {
                    user.projectId = id;
                    const created = yield this._projectUsersRepos.save(user);
                    users.push(created);
                }
                project.tasks = yield tasks;
                project.users = yield users;
                return project;
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in business logic: ${error}`);
            }
        });
        this.inActive = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.inActive(id);
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in business logic: ${error}`);
            }
        });
        this.active = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._repos.active(id);
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in business logic: ${error}`);
            }
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._repos.delete(id);
                yield this._projectTasksRepos.deleteMany(id);
                yield this._projectUsersRepos.deleteMany(id);
                return true;
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in business logic: ${error}`);
            }
        });
        this.get = (id) => __awaiter(this, void 0, void 0, function* () {
            //return ProjectDto
            try {
                const project = yield this._repos.get(id);
                const tasks = [];
                const users = [];
                const projectUsers = yield this._projectUsersRepos.findByMembersByProjectId(id);
                const projectTasks = yield this._projectTasksRepos.findByProjectId(id);
                for (let projectUser of projectUsers) {
                    const user = yield this._userRepos.findById(projectUser.userId);
                    users.push(projectUser);
                }
                for (let projectTask of projectTasks) {
                    const task = yield this._taskRepos.findById(projectTask.taskId);
                    tasks.push(projectTask);
                }
                const item = {
                    name: project.name,
                    code: project.code,
                    status: project.status,
                    timeStart: project.timeStart,
                    timeEnd: project.timeEnd,
                    note: project.note,
                    projectType: project.projectType,
                    customerId: project.customerId,
                    tasks,
                    users,
                    projectTargetUsers: [],
                    isAllUserBelongTo: true,
                    id: project.id,
                };
                return item;
            }
            catch (error) {
                throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Error in business logic: ${error}`);
            }
        });
        this.getProjectIncludingTasks = (userId) => __awaiter(this, void 0, void 0, function* () {
            const result = [];
            const pTask = [];
            const projectsOfUser = yield this._projectUsersRepos.findByUserId(userId);
            for (let projectOfUser of projectsOfUser) {
                let tasks = [];
                const projectId = projectOfUser.projectId;
                const project = yield this._repos.findById(projectId);
                const customer = yield this._customerRepos.findCustomerByCustomerId(project.customerId);
                const tasksProject = yield this._projectTasksRepos.findByProjectId(projectId);
                for (let taskProject of tasksProject) {
                    const task = yield this._taskRepos.findById(taskProject.taskId);
                    if (task) {
                        const taskInfo = yield {
                            projectTaskId: taskProject.id,
                            billable: taskProject.billable,
                            taskName: task.name,
                        };
                        tasks.push(taskInfo);
                    }
                }
                const listPM = yield this._userRepos.findProjectManagers(projectId);
                const item = {
                    projectName: project.name,
                    customerName: customer.name,
                    projectCode: project.code,
                    projectUserType: projectOfUser.type,
                    targetUsers: [],
                    id: projectId,
                    listPM,
                    tasks,
                };
                result.push(item);
            }
            return result;
        });
        this.getFilter = () => __awaiter(this, void 0, void 0, function* () {
            //return [GetProjectFilterDto]
        });
        this.getProjectPM = () => __awaiter(this, void 0, void 0, function* () {
            //return [GetProjectFilterDto]
        });
        this.getProjectUser = () => __awaiter(this, void 0, void 0, function* () {
            //return [GetProjectFilterDto]
        });
    }
}
exports.ProjectService = ProjectService;
Object.seal(ProjectService);
//# sourceMappingURL=ProjectService.js.map