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
exports.ConfigurationController = void 0;
const constants_1 = require("../constants");
const enums_1 = require("../enums");
class ConfigurationController {
    getWorkingTimeConfigAllBranch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = constants_1.CONFIGURATION_WORKING_TIME;
            return res.status(enums_1.HttpStatusCode.OK).json(response);
        });
    }
}
exports.ConfigurationController = ConfigurationController;
Object.seal(ConfigurationController);
//# sourceMappingURL=ConfigurationController.js.map