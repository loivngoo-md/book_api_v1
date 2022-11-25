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
exports.CustomerRepository = void 0;
const base_1 = require("./base");
const schemas_1 = require("../schemas");
class CustomerRepository extends base_1.BaseRepository {
    constructor() {
        super("customers", schemas_1.CustomerSchema);
        this.findCustomerByCustomerId = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.findOne({ id }, "name");
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            return yield this._model.find({}, "id name");
        });
        this.getAllPagging = (filter) => __awaiter(this, void 0, void 0, function* () {
            const keyword = new RegExp(filter.searchText, "i");
            let items = yield this._model
                .find({ $or: [{ name: keyword }, { address: keyword }] })
                .select("name address id")
                .skip(filter.skipCount)
                .limit(filter.maxResultCount);
            const totalCount = yield items.length;
            return {
                totalCount,
                items,
            };
        });
    }
}
exports.CustomerRepository = CustomerRepository;
Object.seal(CustomerRepository);
//# sourceMappingURL=CustomerRepos.js.map