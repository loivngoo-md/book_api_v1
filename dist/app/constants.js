"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAKE_TIMEKEEPING = exports.CONFIGURATION_WORKING_TIME = exports.INACTIVE_PROJECT = exports.ACTIVE_PROJECT = exports.REJECT_TIMESHEET = exports.APPROVE_TIMESHEET = exports.DEACTIVE_USER = exports.ACTIVE_USER = void 0;
exports.ACTIVE_USER = true;
exports.DEACTIVE_USER = false;
exports.APPROVE_TIMESHEET = 2;
exports.REJECT_TIMESHEET = 3;
exports.ACTIVE_PROJECT = 0;
exports.INACTIVE_PROJECT = 1;
exports.CONFIGURATION_WORKING_TIME = {
    "0": {
        morningStartAt: "08:30",
        morningEndAt: "12:00",
        afternoonStartAt: "13:00",
        afternoonEndAt: "17:30",
        morningWorking: "3.5",
        afternoonWorking: "4.5",
        id: 0,
    },
    "1": {
        morningStartAt: "08:00",
        morningEndAt: "12:00",
        afternoonStartAt: "13:00",
        afternoonEndAt: "17:00",
        morningWorking: "4",
        afternoonWorking: "4",
        id: 0,
    },
    "2": {
        morningStartAt: "08:30",
        morningEndAt: "12:00",
        afternoonStartAt: "13:00",
        afternoonEndAt: "17:30",
        morningWorking: "3.5",
        afternoonWorking: "4.5",
        id: 0,
    },
    "3": {
        morningStartAt: "08:30",
        morningEndAt: "12:00",
        afternoonStartAt: "13:00",
        afternoonEndAt: "17:30",
        morningWorking: "3.5",
        afternoonWorking: "4.5",
        id: 0,
    },
};
exports.FAKE_TIMEKEEPING = {
    timekeepingId: 0,
    userId: 0,
    username: "string",
    userType: 0,
    userEmail: "string",
    avatarPath: "string",
    branch: 0,
    date: "2021-09-29T01:55:35.435Z",
    registrationTimeStart: "string",
    registrationTimeEnd: "string",
    checkIn: "string",
    checkOut: "string",
    resultCheckIn: 0,
    resultCheckOut: 0,
    editByUserId: 0,
    editByUserName: "string",
    status: 0,
    userNote: "string",
    noteReply: "string",
};
//# sourceMappingURL=constants.js.map