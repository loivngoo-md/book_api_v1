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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const configs_1 = require("./configs");
const ApiRouter_1 = require("./routes/ApiRouter");
const core_1 = require("./app/core");
const connection_1 = require("./dataAccess/mongo/connection");
class Application {
    constructor() {
        this._server = (0, express_1.default)();
        this.initializeMiddleware();
        this.connectDatabase();
        this.start();
        this.initializeHttpException();
    }
    initializeMiddleware() {
        this._server.use((0, morgan_1.default)("tiny"));
        this._server.use((0, cors_1.default)());
        this._server.use(express_1.default.json());
        this._server.use(express_1.default.urlencoded({ extended: true }));
    }
    initializeHttpException() {
        return __awaiter(this, void 0, void 0, function* () {
            this._server.use([core_1.handlingError, core_1.catch404]);
        });
    }
    connectDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.DataAccess.connect();
        });
    }
    start() {
        this._server.listen(configs_1.PORT, () => {
            console.log(`: ${configs_1.PORT}`);
        });
        this._server.use("/api", new ApiRouter_1.ApiRouter()._router);
        this._server.use("/avatars", express_1.default.static(path_1.default.resolve("public/avatars")));
    }
}
exports.Application = Application;
Object.seal(Application);
//# sourceMappingURL=app.js.map