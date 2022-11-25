"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["CREATEAD"] = 201] = "CREATEAD";
    HttpStatusCode[HttpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["ALREADYEXIST"] = 400] = "ALREADYEXIST";
    HttpStatusCode[HttpStatusCode["TOKEN_INVALID"] = 400] = "TOKEN_INVALID";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
//# sourceMappingURL=HttpStatusCode.js.map