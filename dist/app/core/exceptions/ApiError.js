"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(_code, message) {
        super(message);
        this.code = _code;
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=ApiError.js.map