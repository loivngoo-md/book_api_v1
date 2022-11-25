"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRouter = void 0;
const Role_1 = require("./Role");
const Task_1 = require("./Task");
const User_1 = require("./User");
const base_1 = require("../base");
const Project_1 = require("./Project");
const Session_1 = require("./Session");
const Customer_1 = require("./Customer");
const Timesheet_1 = require("./Timesheet");
const MyTimesheet_1 = require("./MyTimesheet");
const Timekeeping_1 = require("./Timekeeping");
const Configuration_1 = require("./Configuration");
const Book_1 = require("./Book");
const Comment_1 = require("./Comment");
const Library_1 = require("./Library");
class ServiceRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.init();
    }
    init() {
        this._router.use("/task", new Task_1.TaskRouter()._router);
        this._router.use("/user", new User_1.UserRouter()._router);
        this._router.use("/session", new Session_1.SessionRouter()._router);
        this._router.use("/customer", new Customer_1.CustomerRouter()._router);
        this._router.use("/role", new Role_1.RoleRouter()._router);
        this._router.use("/project", new Project_1.ProjectRouter()._router);
        this._router.use("/myTimesheets", new MyTimesheet_1.MyTimesheetRouter()._router);
        this._router.use("/timekeeping", new Timekeeping_1.TimeKeepingRouter()._router);
        this._router.use("/timesheet", new Timesheet_1.TimesheetRouter()._router);
        this._router.use("/configuration", new Configuration_1.ConfigurationRouter()._router);
        this._router.use("/books", new Book_1.BookRouter()._router);
        this._router.use("/comments", new Comment_1.CommentRouter()._router);
        this._router.use("/libraries", new Library_1.LibraryRouter()._router);
    }
}
exports.ServiceRouter = ServiceRouter;
//# sourceMappingURL=index.js.map