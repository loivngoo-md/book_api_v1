"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catch404 = exports.handlingError = void 0;
const enums_1 = require("../../enums");
function handlingError(_error, req, res, next) {
    const code = _error.code;
    const message = _error.message;
    const error = {
        code,
        message,
        details: _error.stack,
        validationResult: null,
    };
    const response = {
        error,
        result: null,
        success: false,
        targetUrl: null,
        unAuthorizedRequest: false,
        __abp: true,
    };
    return res.status(code).json(response);
}
exports.handlingError = handlingError;
function catch404(req, res) {
    const message = `${req.method} ${req.url} is not found!`;
    const code = enums_1.HttpStatusCode.NOT_FOUND;
    const _error = {
        code,
        message,
    };
    const response = {
        _error,
    };
    return res.status(code).json(response);
}
exports.catch404 = catch404;
//# sourceMappingURL=http-exception.js.map