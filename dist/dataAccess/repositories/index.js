"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRepository = exports.LibraryRepository = exports.BookRepository = exports.MyTimesheetRepository = exports.ProjectUsersRepository = exports.ProjectTaskRepository = exports.ProjectRepository = exports.RoleRepository = exports.CustomerRepository = exports.UserRepository = exports.TaskRepository = void 0;
/**
 * task repository
 */
var TaskRepos_1 = require("./TaskRepos");
Object.defineProperty(exports, "TaskRepository", { enumerable: true, get: function () { return TaskRepos_1.TaskRepository; } });
/*--------------------------------------*/
/**
 * user repository
 */
var UserRepos_1 = require("./UserRepos");
Object.defineProperty(exports, "UserRepository", { enumerable: true, get: function () { return UserRepos_1.UserRepository; } });
/*--------------------------------------*/
/**
 * customer repository
 */
var CustomerRepos_1 = require("./CustomerRepos");
Object.defineProperty(exports, "CustomerRepository", { enumerable: true, get: function () { return CustomerRepos_1.CustomerRepository; } });
/*--------------------------------------*/
/**
 * role repository
 */
var RoleRepos_1 = require("./RoleRepos");
Object.defineProperty(exports, "RoleRepository", { enumerable: true, get: function () { return RoleRepos_1.RoleRepository; } });
/*--------------------------------------*/
/**
 * project repository
 */
var ProjectRepos_1 = require("./ProjectRepos");
Object.defineProperty(exports, "ProjectRepository", { enumerable: true, get: function () { return ProjectRepos_1.ProjectRepository; } });
var ProjectTaskRepo_1 = require("./ProjectTaskRepo");
Object.defineProperty(exports, "ProjectTaskRepository", { enumerable: true, get: function () { return ProjectTaskRepo_1.ProjectTaskRepository; } });
var ProjectUsersRepos_1 = require("./ProjectUsersRepos");
Object.defineProperty(exports, "ProjectUsersRepository", { enumerable: true, get: function () { return ProjectUsersRepos_1.ProjectUsersRepository; } });
/*--------------------------------------*/
/**
 * timesheet repository
 */
var MyTimesheetRepos_1 = require("./MyTimesheetRepos");
Object.defineProperty(exports, "MyTimesheetRepository", { enumerable: true, get: function () { return MyTimesheetRepos_1.MyTimesheetRepository; } });
/*--------------------------------------*/
var BookRepos_1 = require("./BookRepos");
Object.defineProperty(exports, "BookRepository", { enumerable: true, get: function () { return BookRepos_1.BookRepository; } });
var LibraryRepos_1 = require("./LibraryRepos");
Object.defineProperty(exports, "LibraryRepository", { enumerable: true, get: function () { return LibraryRepos_1.LibraryRepository; } });
var CommentRepos_1 = require("./CommentRepos");
Object.defineProperty(exports, "CommentRepository", { enumerable: true, get: function () { return CommentRepos_1.CommentRepository; } });
//# sourceMappingURL=index.js.map