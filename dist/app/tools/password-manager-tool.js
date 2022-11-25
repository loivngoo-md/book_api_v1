"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordManager = void 0;
const crypto_1 = require("crypto");
class PasswordManager {
    static hash(psw) {
        return new Promise((resolve, reject) => {
            const salt = (0, crypto_1.randomBytes)(8).toString("hex");
            (0, crypto_1.scrypt)(psw, salt, 64, (err, derivedKey) => {
                if (err)
                    return reject(err);
                return resolve(`${derivedKey.toString("hex")}.${salt}`);
            });
        });
    }
    static compare(psw, storedPsw) {
        return new Promise((resolve, reject) => {
            const [key, salt] = storedPsw.split(".");
            (0, crypto_1.scrypt)(psw, salt, 64, (err, derivedKey) => {
                if (err)
                    return reject(err);
                return resolve(key == derivedKey.toString("hex"));
            });
        });
    }
}
exports.PasswordManager = PasswordManager;
Object.seal(PasswordManager);
//# sourceMappingURL=password-manager-tool.js.map