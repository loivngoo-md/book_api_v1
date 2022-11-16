"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadAvatar = exports.upload = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const util_1 = __importDefault(require("util"));
const multer_1 = __importDefault(require("multer"));
const multerConfig = {
    maxSize: 1024 * 1024 * 5,
    fileMime: [
        "image/jpg",
        "image/png",
        "image/jpeg",
        "application/octet-stream",
    ],
    fileExt: [".jpg", ".png", ".jpeg", ".mp4", ".mov", ".flv", ".wmv", ".avi"],
};
class ConfigurationAvatar {
    constructor() {
        this.storage = multer_1.default.diskStorage({
            destination: (req, file, callback) => {
                try {
                    const dir = "./public/avatars/";
                    fs_1.default.mkdirSync(dir, { recursive: true });
                    callback(null, dir);
                }
                catch (error) {
                    callback(error, null);
                }
            },
            filename: (req, file, callback) => {
                callback(null, `${Date.now()}_${file.originalname}`);
            },
        });
        this.fileFilter = (req, file, callback) => {
            try {
                const mimetype = multerConfig.fileMime.includes(file.mimetype);
                const extname = multerConfig.fileExt.includes(path_1.default.extname(file.originalname));
                if (mimetype && extname) {
                    return callback(null, true);
                }
            }
            catch (error) {
                return callback(error, false);
            }
        };
        this.upload = (0, multer_1.default)({
            storage: this.storage,
            fileFilter: this.fileFilter,
            // limits: { fileSize: 1024 * 1024 * 5 },
        });
    }
}
Object.seal(ConfigurationAvatar);
exports.upload = new ConfigurationAvatar().upload;
exports.uploadAvatar = util_1.default.promisify(exports.upload.single("file"));
//# sourceMappingURL=upload.js.map