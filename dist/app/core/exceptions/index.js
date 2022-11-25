"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catch404 = exports.handlingError = exports.ApiError = void 0;
var ApiError_1 = require("./ApiError");
Object.defineProperty(exports, "ApiError", { enumerable: true, get: function () { return ApiError_1.ApiError; } });
var http_exception_1 = require("./http-exception");
Object.defineProperty(exports, "handlingError", { enumerable: true, get: function () { return http_exception_1.handlingError; } });
Object.defineProperty(exports, "catch404", { enumerable: true, get: function () { return http_exception_1.catch404; } });
//# sourceMappingURL=index.js.map